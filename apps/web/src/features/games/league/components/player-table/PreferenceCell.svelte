<script lang="ts">
    import Badge from "$components/badge/badge.svelte";
    import { getPreferenceLevel } from "../../constants";

    type SkillCellProps = {
        value: number;
    };

    let { value }: SkillCellProps = $props();
</script>

<Badge variant="secondary" class="ml-3">{getPreferenceLevel(value)} ({value})</Badge>
