<script>
    export let y;

    let tabs = [
        { name: "Projects", link: "#projectcs" },
        { name: "About me", link: "#about" },
    ];
</script>

<header class={'sticky z-[10] top-0 duration-200 py-8 px-6 flex items-center justify-center border border-solid ' + (
    y > 0 ? ' py-4 bg-slate-950 border-violet-950' : " py-6 bg-transparent border-transparent"
)}>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>
