<script>
  let tabs = [
    { name: 'Guitar Tuner', link: '/projects/guitar-tuner' },
    { name: 'Caption Crew', link: '/projects/caption-crew' },
    { name: 'SoundLift', link: '/projects/soundlift' },
    { name: 'This Portfolio', link: '/projects/this-portfolio' },
    { name: 'Home', link: '/'}
  ];
</script>

<header class='sticky z-[10] top-0 duration-200 font-bold dark:font-normal px-6'>
  <div class="sm:flex items-center justify-between hidden mx-auto max-w-2xl text-2xl">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-sky-400 dark:hover:text-rose-200">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <div>
  </div>
</header>