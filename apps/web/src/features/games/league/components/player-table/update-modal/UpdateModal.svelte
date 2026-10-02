<script lang="ts">
    import { toast } from "svelte-sonner";
    import { Field, Tabs } from "$components";
    import { Button, Dialog, buttonVariants } from "$components";
    import { getRoleConfig } from "../../../constants";
    import {
        MAXIMUM_SKILL,
        UpdateLeaguePlayerSchema,
        getLeaguePlayer,
        updateLeaguePlayer,
    } from "../../../remote";
    import { ROLES } from "../../../types";
    import RolePreferenceDrag from "./RolePreferenceDrag.svelte";
    import RoleSlider from "./RoleSlider.svelte";

    type UpdateModalProps = {
        memberId: string;
    };

    let { memberId }: UpdateModalProps = $props();

    let open = $state(false);
</script>

<Dialog.Root bind:open>
    <Dialog.Trigger type="button" class={buttonVariants({ variant: "ghost" })}>
        Modifier
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-108">
        <svelte:boundary>
            {@const player = await getLeaguePlayer(memberId)}
            {@const updateForm = updateLeaguePlayer.for(player.id)}

            <Dialog.Header>
                <Dialog.Title>Modifier {player.nickname} ({player.name})</Dialog.Title>
            </Dialog.Header>
            <form
                id="form"
                class="flex flex-col gap-7"
                {...updateForm.preflight(UpdateLeaguePlayerSchema).enhance(async (form) => {
                    try {
                        if (await form.submit()) {
                            toast.success("Joueur modifié avec succès.");
                            open = false;
                        } else {
                            toast.error("Données invalides.");
                        }
                    } catch {
                        toast.error("Une erreur est survenue.");
                    }
                })}
            >
                <input type="hidden" name="hello" value="test" />
                <Field.Set>
                    <Tabs.Root value="skill" class="w-full gap-4">
                        <Tabs.List class="w-full h-10!">
                            <Tabs.Trigger value="skill">Compétences</Tabs.Trigger>
                            <Tabs.Trigger value="preference">Préférences</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="skill">
                            <Field.Set>
                                {#each ROLES as role (role)}
                                    {@const field = updateForm.fields.skill[role]}

                                    <RoleSlider
                                        label={getRoleConfig(role).label}
                                        max={MAXIMUM_SKILL}
                                        {field}
                                        initialValue={player.skill[role]}
                                    />
                                    <Field.Error errors={field.issues()} />
                                {/each}
                            </Field.Set>
                        </Tabs.Content>
                        <Tabs.Content value="preference">
                            <RolePreferenceDrag
                                preferenceForm={updateForm.fields.preference}
                                {player}
                            />
                        </Tabs.Content>
                    </Tabs.Root>
                </Field.Set>
            </form>

            {#snippet pending()}
                <p>Chargement des données...</p>
            {/snippet}

            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#snippet failed(error, reset)}
                <p>Une erreur est survenue lors du chargement des données.</p>
                <p>Error : {error}</p>
                <Button onclick={reset}>Réessayer</Button>
            {/snippet}
        </svelte:boundary>
        <Dialog.Footer>
            <Dialog.Close type="button" class={buttonVariants({ variant: "outline" })}>
                Annuler
            </Dialog.Close>
            <Button form="form" type="submit">Enregistrer</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
