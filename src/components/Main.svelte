<script>
    import Step from "./Step.svelte";
    import Banner from "./Banner.svelte";
    import Highlights from "./Highlights.svelte"

    let steps = [
        {
            name: 'Elixir',
            icon: 'fa-solid fa-flask-vial',
            borderColor: 'border-violet-400 border-2',
            items: [
                { name: 'Elixir', description: 'programming language' },
                { name: 'Phoenix Liveview', description: 'full-stack web framework' },
                { name: 'Ecto', description: 'database library' },
                { name: 'Nerves', description: 'embedded systems framework' }
            ]
        },
        {
            name: 'JavaScript',
            icon: 'fa-solid fa-globe',
            borderColor: 'border-teal-300 border-2',
            items: [
                { name: 'Javascript', description: 'programming language' },
                { name: 'Svelte.js/SvelteKit', description: 'full-stack web framework' },
                { name: 'Tailwind CSS', description: 'utilities framework' },
                { name: 'Node.js', description: 'JavaScript runtime' }
            ]
        },
        {
            name: 'Database + Deployment',
            icon: 'fa-solid fa-server',
            borderColor: 'border-orange-400 border-2',
            items: [
                { name: 'PostgreSQL', description: 'relational database' },
                { name: 'Fly.io', description: 'application deployment platform' },
                { name: 'Gigalixir', description: 'Elixir application hosting' },
                { name: 'SQL', description: 'does not matter' }
            ]
        }
    ];
</script>

<main>
    <div class="my-4">
    <Banner />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each steps as step}
            <Step step={step} borderColor={step.borderColor} />
        {/each}
    </div>
    <div>
        <Highlights />
    </div>
</main>