<script>
	import Banner from './Banner.svelte';
	import Step from './Step.svelte';
	import Projects from './Projects.svelte';

	let steps = [
		{
			name: 'Elixir',
			icon: 'fa-solid fa-flask-vial',
			borderColor: 'border-violet-700 dark:border-purple-300 border-[3px] dark:border-2',
			items: [
				{ name: 'Ecto' },
				{ name: 'Nerves' },
				{ name: 'Phoenix' },
				{ name: 'LiveView' },
				{ name: 'Livebook'},
				{ name: 'LiveView Native'}
			]
		},
		{
			name: 'JavaScript',
			icon: 'fa-solid fa-globe',
			borderColor: 'dark:border-emerald-200 border-emerald-500 border-[3px] dark:border-2',
			items: [
				{ name: 'Node.js' },
				{ name: 'Tone.js'},
				{ name: 'Tailwind CSS' },
				{ name: 'Svelte.js'},
				{ name: 'LiveSvelte / SvelteKit' }
			]
		},
		{
			name: 'Database + Deployment',
			icon: 'fa-solid fa-server',
			borderColor: 'dark:border-blue-300 border-blue-400 border-[3px] dark:border-2',
			items: [
				{ name: 'Git' },
				{ name: 'AWS' },
				{ name: 'CI/CD' },
				{ name: 'Docker' },
				{ name: 'PostgreSQL' }
			]
		}
	];
</script>

<main class="flex flex-col min-h-screen" >

	<Banner />
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 mt-8">
		{#each steps as step}
			<Step {step} borderColor={step.borderColor} />
		{/each}
	</div> 
	<div class="pt-20">
	<Projects />
</div>
</main>
