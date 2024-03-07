<script>
	import Banner from './Banner.svelte';
	import Step from './Step.svelte';
	import Soundlift from './Soundlift.svelte';
	import Captioncrew from './Captioncrew.svelte';
	import Portfolio from './Portfolio.svelte';
	import Tuner from './Tuner.svelte';
	import Tonex from './Tonex.svelte';
	import Premier from './Premier.svelte';

	let steps = [
		{
			name: 'Elixir',
			icon: 'fa-solid fa-flask-vial',
			borderColor: 'border-purple-300 border-2',
			items: [
				{ name: 'Elixir' },
				{ name: 'Ecto' },
				{ name: 'Nerves' },
				{ name: 'Phoenix' },
				{ name: 'Liveview' },
				{ name: 'LiveView Native' }
			]
		},
		{
			name: 'JavaScript',
			icon: 'fa-solid fa-globe',
			borderColor: 'border-teal-300 border-2',
			items: [
				{ name: 'Javascript' },
				{ name: 'Node.js' },
				{ name: 'TypeScript' },
				{ name: 'Tailwind CSS' },
				{ name: 'Svelte.js/SvelteKit' }
			]
		},
		{
			name: 'Database + Deployment',
			icon: 'fa-solid fa-server',
			borderColor: 'border-blue-200 border-2',
			items: [
				{ name: 'Kubernetes' },
				{ name: 'Git' },
				{ name: 'Docker' },
				{ name: 'PostgreSQL' },
				{ name: 'Github Actions' }
			]
		}
	];
</script>

<main>
	<div class="my-4"><Banner /></div>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
		{#each steps as step}
			<Step {step} borderColor={step.borderColor} />
		{/each}
	</div>
	<div class="flex flex-wrap">
		<div class="w-1/2 p-4"><Soundlift /></div>
		<div class="w-1/2 p-4"><Captioncrew /></div>
		<div class="w-1/2 p-4"><Portfolio /></div>
		<div class="w-1/2 p-4"><Tuner /></div>
	</div>
	<div class="flex flex-wrap">
		<div class="w-1/2 p-4"><Tonex /></div>
		<div class="w-1/2 p-4"><Premier /></div>
	</div>
</main>
