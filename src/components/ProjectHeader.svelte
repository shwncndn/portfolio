<script>
  let tabs = [
    { name: 'Tuner', link: '/projects/tuner' },
    { name: 'SoundLift', link: '/projects/soundlift' },
    { name: 'Caption Crew', link: '/projects/caption-crew' },
    { name: 'This Portfolio', link: '/projects/this-portfolio' },
  ];
</script>

<header class='sticky z-[10] top-0 duration-200 px-6'>
  <div class="sm:flex items-center justify-between hidden mx-auto max-w-2xl text-2xl">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-rose-200">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <div>
  </div>
</header>