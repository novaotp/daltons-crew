<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "$shared/cn";
    import type { WithElementRef } from "$types/component";

    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();
</script>

<tr
    bind:this={ref}
    data-slot="table-row"
    class={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</tr>
