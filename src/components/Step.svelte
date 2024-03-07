<script>
    export let step;
    export let borderColor;
  
    function getTextColor(itemName) {
      if (step.name === 'Elixir') {
        return 'text-purple-300';
      } else if (step.name === 'JavaScript') {
        return 'text-teal-300';
      } else if (step.name === 'Database + Deployment') {
        return 'text-orange-200';
      }
      return '';
    }
  </script>
  
  <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid {borderColor} text-center group cursor-pointer hover:{borderColor} duration-200 bg-teal-100 bg-opacity-5 backdrop-filter backdrop-blur-lg">
    <div class=" grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto">
      <i class={step.icon}></i>
    </div>
    {#if step.items}
      <ul class="list-none p-0 m-0">
        {#each step.items as item}
          <li class="mb-2 flex items-center">
            {#if item.name === 'Elixir'}
              <svg class="mr-4 top-1 h-5 w-5" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- SVG content here -->
              </svg>
            {:else if item.name === 'Phoenix Liveview'}
              <img src="/static/icons/phoenix.svg" alt="Phoenix Liveview" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Ecto'}
              <img src="/static/icons/elixir.svg" alt="Ecto" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Nerves'}
              <img src="/static/icons/elixir.svg" alt="Nerves" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Javascript'}
              <img src="/static/icons/js.svg" alt="JavaScript" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Svelte.js/SvelteKit'}
              <img src="/static/icons/svelte.svg" alt="Svelte.js/SvelteKit" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Tailwind CSS'}
              <img src="/static/icons/tailwind.svg" alt="Tailwind CSS" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Node.js'}
              <img src="/static/icons/node.svg" alt="Node.js" class="w-5 h-5 mr-2" />
            {:else if item.name === 'PostgreSQL'}
              <img src="/static/icons/elixir.svg" alt="PostgreSQL" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Fly.io'}
              <img src="/static/icons/elixir.svg" alt="Fly.io" class="w-5 h-5 mr-2" />
            {:else if item.name === 'Gigalixir'}
              <img src="/static/icons/elixir.svg" alt="Gigalixir" class="w-5 h-5 mr-2" />
            {:else if item.name === 'SQL'}
              <img src="/static/icons/elixir.svg" alt="SQL" class="w-5 h-5 mr-2" />
            {/if}
            <div>
              <strong class="{getTextColor(item.name)}">{item.name}</strong>
              {item.description}
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>