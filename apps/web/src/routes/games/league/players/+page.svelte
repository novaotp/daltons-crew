<script lang="ts">
    import { Button } from "$components";
    import {
        type LeaguePlayer,
        PlayerTable,
        type PlayerWithRoleStat,
        type Role,
        RoleSelection,
        getLeaguePlayers,
    } from "$features/games/league";

    let role = $state<Role>("top");

    function getDataFromPlayers(players: LeaguePlayer[]): PlayerWithRoleStat[] {
        return players.map((player) => {
            return {
                ...player,
                preference: player.preference[role],
                skill: player.skill[role],
            };
        });
    }
</script>

<svelte:head>
    <title>Joueurs - League of Legends | The Daltons Crew</title>
</svelte:head>

<div class="grid place-items-center w-full lg:py-20 p-4">
    <main class="w-full max-w-5xl flex flex-col gap-8 lg:gap-16">
        <div class="flex justify-between items-start flex-col gap-4 sm:flex-row sm:items-end">
            <h1 class="scroll-mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Joueurs</h1>
            <RoleSelection bind:value={role} />
        </div>

        <svelte:boundary>
            {@const players = await getLeaguePlayers()}

            <PlayerTable data={getDataFromPlayers(players)} />

            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#snippet failed(error, reset)}
                <h1>Erreur</h1>
                <p>Une erreur est survenue lors du chargement des joueurs.</p>
                <Button onclick={reset}>Recharger</Button>
            {/snippet}
        </svelte:boundary>
    </main>
</div>
