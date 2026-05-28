<script lang="ts">
    import "./layout.css";
    import { resolve } from "$app/paths";
    import androidIcon192 from "$assets/favicon/android-icon-192x192.png";
    import appleIcon57 from "$assets/favicon/apple-icon-57x57.png";
    import appleIcon60 from "$assets/favicon/apple-icon-60x60.png";
    import appleIcon72 from "$assets/favicon/apple-icon-72x72.png";
    import appleIcon76 from "$assets/favicon/apple-icon-76x76.png";
    import appleIcon114 from "$assets/favicon/apple-icon-114x114.png";
    import appleIcon120 from "$assets/favicon/apple-icon-120x120.png";
    import appleIcon144 from "$assets/favicon/apple-icon-144x144.png";
    import appleIcon152 from "$assets/favicon/apple-icon-152x152.png";
    import appleIcon180 from "$assets/favicon/apple-icon-180x180.png";
    import favicon16 from "$assets/favicon/favicon-16x16.png";
    import favicon32 from "$assets/favicon/favicon-32x32.png";
    import favicon96 from "$assets/favicon/favicon-96x96.png";
    import manifest from "$assets/favicon/manifest.json?url";
    import msIcon144 from "$assets/favicon/ms-icon-144x144.png";
    import { Navigation } from "$features/navigation";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
    <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
    <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
    <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
    <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
    <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
    <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="manifest" href={manifest} />
    <meta name="msapplication-TileImage" content={msIcon144} />
</svelte:head>

<div class="flex flex-col">
    <header class="relative h-20 w-full grid place-items-center p-4">
        <nav class="h-full max-w-5xl w-full flex justify-between items-center">
            <a href={resolve("/")} aria-label="Go to home page" class="shrink-0 h-full">
                <enhanced:img
                    src="$assets/logo/logo.webp"
                    alt="TDC Logo"
                    class="h-12 w-auto object-contain"
                />
            </a>
            <Navigation />
        </nav>
    </header>
    {@render children()}
</div>
