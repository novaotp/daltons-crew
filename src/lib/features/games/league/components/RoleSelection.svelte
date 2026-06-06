<script lang="ts">
    import { ToggleGroup } from "$components";
    import { getRoleConfig } from "../constants";
    import { ROLES, type Role } from "../types";

    type RoleSelectionProps = {
        /**
         * The currently selected role.
         * @bindable
         */
        value: Role;
    };

    let { value = $bindable() }: RoleSelectionProps = $props();

    function getValue() {
        return value;
    }

    function setValue(newValue: Role | undefined) {
        if (!newValue) return;

        value = newValue;
    }
</script>

<ToggleGroup.Root bind:value={getValue, setValue} variant="outline" type="single">
    {#each ROLES as role (role)}
        {@const { label, image } = getRoleConfig(role)}

        <ToggleGroup.Item value={role}>
            <enhanced:img src={image} alt="{label} Role Icon" class="size-5" />
        </ToggleGroup.Item>
    {/each}
</ToggleGroup.Root>
