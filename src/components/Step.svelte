<script>
	import { slide } from 'svelte/transition';
	export let step;
	export let borderColor;
	let isHovered = false;
  
	function getTextColor(itemName) {
	  if (step.name === 'Elixir') {
		return 'text-purple-200';
	  } else if (step.name === 'JavaScript') {
		return 'text-emerald-100';
	  } else if (step.name === 'Database + Deployment') {
		return 'text-blue-200';
	  }
	  return '';
	}
  </script>
  
  <div
	class="p-6 sm:p-8 md:p-10 flex flex-col gap-6 rounded-lg border border-solid {borderColor} text-center group cursor-pointer hover:{borderColor} duration-200 bg-teal-100 bg-opacity-5 relative overflow-hidden pt-14 sm:pt-16 md:pt-18 lg:pt-20"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
  >
	<div class="absolute top-0 left-0 right-0 grid place-items-center px-6 pt-2 text-6xl md:text-7xl mt-4 mx-auto">
	  <i class={step.icon}></i>
	</div>
  
	<div class="transition-opacity duration-300 ease-in-out -mb-6 pt-4 mt-8" class:opacity-0={isHovered} class:opacity-100={!isHovered}>
	  <h3 class="text-3xl font-bold mb-2">{step.name}</h3>
	  {#if step.name === 'Elixir'}
		<p class="text-xl mb-4 text-violet-700 dark:text-purple-200">Functional and fault tolerant</p>
	  {:else if step.name === 'JavaScript'}
		<p class="text-xl mb-4 text-emerald-600 dark:text-emerald-100">Ubiquitous and Web native</p>
	  {:else if step.name === 'Database + Deployment'}
		<p class="text-[17px] mb-4 text-sky-600 dark:text-blue-200">Version control, CI/CD, cloud and DB solutions</p>
	  {/if}
	</div>
  
	{#if step.items}
	  <div
		class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
		class:opacity-0={!isHovered}
		class:opacity-100={isHovered}
	  >
		<ul class="list-none p-0 m-0 flex flex-wrap justify-center">
		  {#each step.items as item}
			<li class="mb-4 flex items-center justify-center w-1/2">
			  <div><strong class={getTextColor(item.name)}>{item.name}</strong></div>
			</li>
		  {/each}
		</ul>
	  </div>
	{/if}
  </div>