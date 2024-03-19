<script>
	import Banner from './Banner.svelte';
	import Step from './Step.svelte';
	import Projects from './Projects.svelte';

	let steps = [
		{
			name: 'Elixir',
			icon: 'fa-solid fa-flask-vial',
			borderColor: 'border-purple-300 border-2',
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
			borderColor: 'border-emerald-200 border-2',
			items: [
				{ name: 'Node.js' },
				{ name: 'Tone.js'},
				{ name: 'TypeScript' },
				{ name: 'Tailwind CSS' },
				{ name: 'Svelte.js'},
				{ name: 'LiveSvelte / SvelteKit' }
			]
		},
		{
			name: 'Database + Deployment',
			icon: 'fa-solid fa-server',
			borderColor: 'border-blue-300 border-2',
			items: [
				{ name: 'Git' },
				{ name: 'AWS' },
				{ name: 'CI/CD' },
				{ name: 'Docker' },
				{ name: 'Kubernetes'}, 
				{ name: 'PostgreSQL' }
			]
		}
	];
</script>

<main>
	<Banner />
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
		{#each steps as step}
			<Step {step} borderColor={step.borderColor} />
		{/each}
	</div> 
	<div class="u">
	<Projects />
</div>
	<div class="flex flex-row justify-center">
	</div>	
</main>
