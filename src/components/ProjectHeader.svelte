<script>
    let tabs = [
      { name: 'Tuner', link: '/projects/tuner' },

      { name: 'SoundLift', link: '/projects/soundlift' },

      { name: 'Tonex', link: '/projects/tonex' }
    ];
  </script>
  
  <header class='sticky z-[10] top-0 duration-200 px-6 flex justify-between'>
    <div class="sm:flex items-center gap-4 hidden">
      {#each tabs as tab, index}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
          <p>{tab.name}</p>
        </a>
      {/each}
    </div>
  </header>