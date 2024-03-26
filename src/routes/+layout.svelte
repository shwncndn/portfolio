<script>
	import '../app.css';
	import ProjectHeader from '../components/ProjectHeader.svelte';
	import DarkLight from '../components/DarkLight.svelte';
	import { page } from '$app/stores';
	export let y;
	let innerHeight = 0;
	let innerWidth = 0;
	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen mt-4 sm:mt-10 px-4 sm:px-0"
>
	<div
		class={'fixed bottom-0 w-full duration-200 flex p-4 sm:p-10 z-[10] ' +
			(y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0')}
	>
		<!-- Add your content here -->
	</div>
	<DarkLight />
	{#if $page.url.pathname !== '/'}
		<ProjectHeader />
	{/if}

	<slot />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

<style>
	@media (max-width: 640px) {
		/* Adjust styles for mobile screens */
		.mt-10 {
			margin-top: 1rem;
		}
		.p-10 {
			padding: 1rem;
		}
	}
</style>
