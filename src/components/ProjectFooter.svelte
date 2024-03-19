<script>
    let tabs = [
      { name: 'LinkedIn', link: '/projects/tuner' },
      { name: 'Github', link: '/projects/soundlift' },
      { name: 'Medium', link: '/projects/caption-crew' },
      { name: 'Dev.to', link: '/projects/this-portfolio' },
      { name: 'CV', link: '/projects/this-portfolio' }
    ];
  </script>
  
  <footer class='sticky z-[10] top-0 duration-200 px-6 my-10'>
    <div class="sm:flex items-center justify-between hidden mx-auto max-w-2xl text-xxl">
      {#each tabs as tab, index}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
          <p>{tab.name}</p>
        </a>
      {/each}
    </div>
  </footer>