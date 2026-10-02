<script lang="ts">
    import IconMenu2 from "@tabler/icons-svelte/icons/menu-2";
    import type { ResolvedPathname } from "$app/types";
    import { Button, Sheet, buttonVariants } from "$components";
    import ThemeDropdown from "./ThemeDropdown.svelte";

    type Link = {
        label: string;
        href: ResolvedPathname;
    };

    const links: Link[] = [
        {
            label: "League of Legends",
            href: "/games/league",
        },
        {
            label: "Slanders",
            href: "/slanders",
        },
    ];
</script>

<div class="lg:hidden flex items-center gap-4">
    <ThemeDropdown />
    <Sheet.Root>
        <Sheet.Trigger class={buttonVariants({ variant: "ghost", size: "icon-lg" })}>
            <IconMenu2 class="size-5" />
        </Sheet.Trigger>
        <Sheet.Content side="right">
            <Sheet.Header>
                <Sheet.Title>The Daltons Crew</Sheet.Title>
            </Sheet.Header>
            <div class="grid flex-1 auto-rows-min gap-6 px-4">
                {#each links as { label, href } (label)}
                    <a {href}>{label}</a>
                {/each}
            </div>
        </Sheet.Content>
    </Sheet.Root>
</div>

<div class="hidden lg:flex gap-4">
    {#each links as { label, href } (label)}
        <Button {href} variant="ghost">{label}</Button>
    {/each}
    <ThemeDropdown />
</div>
