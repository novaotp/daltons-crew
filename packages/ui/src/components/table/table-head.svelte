<script lang="ts">
    import type { HTMLThAttributes } from "svelte/elements";
    import { cn } from "$shared/cn";
    import type { WithElementRef } from "$types/component";

    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
    bind:this={ref}
    data-slot="table-head"
    class={cn(
        "text-foreground h-10 px-4 text-left align-middle font-medium whitespace-nowrap has-[[role=checkbox]]:pr-0",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</th>
