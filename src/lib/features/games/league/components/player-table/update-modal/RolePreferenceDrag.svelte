<script lang="ts">
    import IconGripVertical from "@tabler/icons-svelte/icons/grip-vertical";
    import { type DragDropState, draggable, droppable } from "@thisux/sveltednd";
    import { flip } from "svelte/animate";
    import { fromAction } from "svelte/attachments";
    import { fade } from "svelte/transition";
    import { getRoleConfig } from "../../../constants";
    import type { updateLeaguePlayer } from "../../../remote";
    import type { LeaguePlayer, Role } from "../../../types";

    type RolePreferenceDragProps = {
        preferenceForm: typeof updateLeaguePlayer.fields.preference;
        player: LeaguePlayer;
    };

    let { preferenceForm, player }: RolePreferenceDragProps = $props();

    let preference = $derived(player.preference);
    let roles = $derived.by(() => {
        const state = $state(preferenceToSortedRoles(preference));

        return state;
    });

    function handleDrop(state: DragDropState<Role>) {
        let dropIndex = parseInt(state.targetContainer ?? "0");
        if (state.dropPosition === "after") dropIndex += 1;

        const dragIndex = roles.findIndex((item: Role) => item === state.draggedItem);
        if (dragIndex === -1 || isNaN(dropIndex)) return;

        const [item] = roles.splice(dragIndex, 1);
        const adjusted = dragIndex < dropIndex ? dropIndex - 1 : dropIndex;
        roles.splice(adjusted, 0, item);

        preference = sortedRolesToPreference(roles);
    }

    function preferenceToSortedRoles(preference: Record<Role, number>): Role[] {
        return Object.entries(preference)
            .sort(([, aValue], [, bValue]) => aValue - bValue)
            .map(([aRole]) => aRole) as Role[];
    }

    function sortedRolesToPreference(roles: Role[]): Record<Role, number> {
        return roles.reduce(
            (acc, curr, index) => {
                acc[curr] = index + 1;

                return acc;
            },
            {} as Record<Role, number>
        );
    }
</script>

<div class="border border-border rounded-md">
    {#each roles as role, index (role)}
        {@const { label, image } = getRoleConfig(role)}

        <div
            animate:flip={{ duration: 200 }}
            in:fade={{ duration: 150 }}
            out:fade={{ duration: 150 }}
            class="flex items-center gap-4 border-b border-border p-6 transition-all last:border-b-0 hover:bg-background/10"
            {@attach fromAction(draggable, () => ({
                container: index.toString(),
                dragData: role,
                handle: ".drag-handle",
            }))}
            {@attach fromAction(droppable<Role>, () => ({
                container: index.toString(),
                callbacks: { onDrop: handleDrop },
            }))}
        >
            <input {...preferenceForm[role].as("hidden", preference[role])} />
            <button
                aria-label="drag to reorder"
                class="drag-handle cursor-grab transition-colors active:cursor-grabbing"
            >
                <IconGripVertical class="text-muted-foreground" />
            </button>
            <div class="flex-1 flex items-center gap-4">
                <enhanced:img src={image} alt="{label} Role Icon" class="size-5" />
                <p class="text-sm text-swiss-black dark:text-white">{label}</p>
            </div>
            <span class="text-xs text-swiss-mid-gray dark:text-white/60">
                {(index + 1).toString().padStart(2, "0")}
            </span>
        </div>
    {/each}
</div>
