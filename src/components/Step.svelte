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
	class="p-6 sm:p-8 md:p-10 flex flex-col gap-6 rounded-lg border border-solid {borderColor} text-center group cursor-pointer hover:{borderColor} duration-200 bg-teal-100 bg-opacity-5"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
  >
	<div
	  class="grid place-items-center  px-6 text-6xl md:text-7xl -mt-14 sm:-mt-16 md:-mt-18 lg:-mt-20 mx-auto"
	>
	  <i class={step.icon}></i>
	</div>
  
	<h3 class="text-3xl font-bold mb-2">{step.name}</h3>
  
	{#if step.name === 'Elixir'}
	  <p class="text-lg mb-4">Functional and Fault-Tolerant Full Stack </p>
	{:else if step.name === 'JavaScript'}
	  <p class="text-lg mb-4">and Web native</p>
	{:else if step.name === 'Database + Deployment'}
	  <p class="text-[17px] mb-4">Version Control, CI/CD, Cloud and DB Solutions  </p>
	{/if}
  
	{#if isHovered && step.items}
	  <div transition:slide={{ duration: 300 }}>
		<ul class="list-none p-0 m-0 flex flex-wrap justify-center">
		  {#each step.items as item, index}
			{#if index % 2 === 0}
			  <li class="mb-4 flex items-center justify-center w-1/2">
				<div><strong class={getTextColor(item.name)}>{item.name}</strong></div>
			  </li>
			{:else}
			  <li class="mb-4 flex items-center justify-center w-1/2">
				<div><strong class={getTextColor(item.name)}>{item.name}</strong></div>
			  </li>
			{/if}
		  {/each}
		</ul>
	  </div>
	{/if}
  </div>