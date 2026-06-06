<script lang="ts">
    import type { RemoteFormField } from "@sveltejs/kit";
    import { Slider as SliderPrimitive } from "bits-ui";
    import { Field } from "$components";
    import { cn } from "$shared/cn";

    type SliderProps = {
        name: string;
        type: "number";
        "aria-invalid": boolean | "false" | "true" | undefined;
        value: number;
        readonly defaultValue?: string | number;
    };

    type RoleSliderProps = {
        label: string;
        max: number;
        field: RemoteFormField<number>;
        initialValue: number;
    };

    let { label, max, field, initialValue }: RoleSliderProps = $props();

    let sliderField = $derived(field.as("number", initialValue));
</script>

<Field.Field class="w-full flex flex-col gap-4 mb-6">
    <Field.Label for="slider-{label}">{label}</Field.Label>
    <input type="hidden" name={sliderField.name} value={sliderField.value} />
    <SliderPrimitive.Root
        id="slider-{label}"
        min={1}
        {max}
        onValueCommit={(value) => field.set(value)}
        // Casting because .as("number")'s value field is string | number, but slider only accepts number
        {...sliderField as SliderProps}
        type="single"
        data-slot="slider"
        class={cn(
            "relative data-vertical:min-h-40 flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col"
        )}
    >
        {#snippet children({ tickItems, thumbItems })}
            <span
                data-slot="slider-track"
                data-orientation="horizontal"
                class={cn(
                    "rounded-2xl data-horizontal:h-1 data-vertical:w-1 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
                )}
            >
                <SliderPrimitive.Range
                    data-slot="slider-range"
                    class={cn(
                        "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
                    )}
                />
            </span>

            {#each thumbItems as thumb (thumb.index)}
                <SliderPrimitive.Thumb
                    data-slot="slider-thumb"
                    index={thumb.index}
                    class="hover:ring-ring/30 focus-visible:ring-ring/30 size-4 rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-dark:bg-clip-padding hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
                />
            {/each}

            {#each tickItems as { index, value } (index)}
                <SliderPrimitive.Tick
                    {index}
                    class="dark:bg-background/20 bg-background z-1 h-2 w-px"
                />
                <SliderPrimitive.TickLabel
                    {index}
                    class="text-muted-foreground data-bounded:text-foreground mt-3 text-sm font-medium leading-none"
                    position="bottom"
                >
                    {value}
                </SliderPrimitive.TickLabel>
            {/each}
        {/snippet}
    </SliderPrimitive.Root>
</Field.Field>
