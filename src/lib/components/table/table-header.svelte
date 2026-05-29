<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "$shared/cn";
    import type { WithElementRef } from "$types/component";

    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> = $props();
</script>

<thead
    bind:this={ref}
    data-slot="table-header"
    class={cn("[&_tr]:border-b bg-muted", className)}
    {...restProps}
>
    {@render children?.()}
</thead>
