<script lang="ts">


    import slanderVideo1 from "@daltons-crew/assets/slanders/1.mp4";
import slanderVideo3 from "@daltons-crew/assets/slanders/3.mp4";
import slanderVideo4 from "@daltons-crew/assets/slanders/4.mp4";








    
    

    const videos = [slanderVideo4, slanderVideo3, "MISSING", slanderVideo1];


</script>

<svelte:head>
    <title>Slanders | The Daltons Crew</title>
</svelte:head>

<div class="grid place-items-center w-full lg:py-20 p-4">
    <main class="w-full max-w-5xl flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div class="flex flex-col gap-4 lg:min-w-100">
            <h1 class="scroll-mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Slanders
            </h1>
            <p class="leading-7 text-muted-foreground whitespace-nowrap">
                Les slanders faits par notre maître Senku.
            </p>
            <div class="hidden lg:flex flex-col">
                Liens :
                <ul class="list-disc pl-5">
                    {#each videos, index (index)}
                        <li>
                            <a
                                href="#slander-{videos.length - index}"
                                class="text-primary underline">Slander {videos.length - index}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <ul class="flex flex-col gap-16 grow">
            {#each videos as src, index (index)}
                <li class="flex flex-col items-start gap-4">
                    <h2
                        id="slander-{index}"
                        class="scroll-mt-20 text-3xl font-semibold tracking-tight"
                    >
                        Slander {videos.length - index}
                    </h2>
                    {#if src !== "MISSING"}
                        <div class="rounded-2xl overflow-hidden">
                            <video controls>
                                <source {src} type="video/mp4" />
                            </video>
                        </div>
                    {:else}
                        <p>
                            Ce slander n'est malheureusement pas disponible car je n'ai pas la
                            source...
                        </p>
                    {/if}
                </li>
            {/each}
        </ul>
    </main>
</div>
