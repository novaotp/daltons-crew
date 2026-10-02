<script lang="ts">
    import { IconCheck } from "@tabler/icons-svelte";
    import { Select as SelectPrimitive } from "bits-ui";
    import { cn } from "$shared/cn";
    import type { WithoutChild } from "$types/component";

    let {
        ref = $bindable(null),
        class: className,
        value,
        label,
        children: childrenProp,
        ...restProps
    }: WithoutChild<SelectPrimitive.ItemProps> = $props();
</script>

<SelectPrimitive.Item
    bind:ref
    {value}
    data-slot="select-item"
    class={cn(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-7 gap-2 rounded-xl py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 data-highlighted:bg-accent data-highlighted:text-accent-foreground relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
    )}
    {...restProps}
>
    {#snippet children({ selected, highlighted })}
        <span class="absolute inset-e-2 flex size-3.5 items-center justify-center">
            {#if selected}
                <IconCheck class="cn-select-item-indicator-icon" />
            {/if}
        </span>
        {#if childrenProp}
            {@render childrenProp({ selected, highlighted })}
        {:else}
            {label || value}
        {/if}
    {/snippet}
</SelectPrimitive.Item>
