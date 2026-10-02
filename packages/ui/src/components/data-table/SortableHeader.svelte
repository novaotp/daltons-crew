<script module lang="ts">
    import IconArrowNarrowDown from "@tabler/icons-svelte/icons/arrow-narrow-down";
    import IconArrowNarrowUp from "@tabler/icons-svelte/icons/arrow-narrow-up";
    import IconArrowsUpDown from "@tabler/icons-svelte/icons/arrows-up-down";

    const SORT_DIRECTION_TO_ICONS: Record<SortDirection | "false", typeof IconArrowNarrowUp> = {
        asc: IconArrowNarrowUp,
        desc: IconArrowNarrowDown,
        false: IconArrowsUpDown,
    };
</script>

<script lang="ts">
    import type { SortDirection } from "@tanstack/table-core";
    import type { ComponentProps, Snippet } from "svelte";
    import { Button } from "$components";

    type SortableHeaderProps = ComponentProps<typeof Button> & {
        children?: Snippet;
        header?: string;
        sortDirection: SortDirection | false;
    };

    let {
        children = fallback,
        header,
        sortDirection,
        variant = "ghost",
        ...restProps
    }: SortableHeaderProps = $props();

    let Icon = $derived(SORT_DIRECTION_TO_ICONS[sortDirection || "false"]);
</script>

<Button {variant} aria-label="Sort by {header}" {...restProps}>
    {@render children()}
    <Icon class="ms-2 size-4" />
</Button>

{#snippet fallback()}
    {#if header}
        {header}
    {/if}
{/snippet}
