<script lang="ts">
    import { Button } from "$components";
</script>

<svelte:head>
    <title>League of Legends | The Daltons Crew</title>
</svelte:head>

<div class="grid place-items-center w-full lg:py-20 p-4">
    <main class="w-full max-w-5xl flex flex-col gap-8 lg:gap-16">
        <div class="flex justify-between items-center">
            <h1 class="scroll-mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                League of Legends
            </h1>
            <div class="flex items-center gap-4">
                <Button href="/games/league/players" variant="secondary">Voir joueurs</Button>
            </div>
        </div>
    </main>
</div>
