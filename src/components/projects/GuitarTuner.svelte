<script>

</script>

<tuner>
<div class="m-4 p-4 mt-10 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border-4 border-solid border-slate-600 dark:border-white text-center  dark:bg-white dark:bg-opacity-5">
  <h1 class="text-4xl sm:text-5xl md:text-6xl mb-">Guitar Tuner</h1>
  <!-- Web link -->
  <div class="flex items-center justify-center mt-2 ">
    <svg class="icon icon-tabler icon-tabler-brand-vercel mr-2" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M3 19h18l-9 -15z"/>
    </svg>
    <a href="https://tuner-m26o.vercel.app/" class="text-sm sm:text-base md:text-xl hover:text-violet-400">https://tuner-m26o.vercel.app/</a>
  </div>
  <!-- Github Repo -->
  <div class="flex items-center justify-center mt-1">
    <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
    </svg>
    <a href="https://github.com/your-repo-link" class="text-sm sm:text-base md:text-lg hover:text-violet-400">https://github.com/shwncndn/tuner</a>
  </div>
  <!-- tldr -->
  <p class="text-lg sm:text-base md:text-3xl mt-4"><span class="text-[28px dark:text-amber-200 mr-2">tl;dr </span> An interactive instrument tuning app that generates sine waves via Tone.js.</p>
  <div class="flex flex-row justify-center gap-52 mt-10 mb-4">
  <!-- Details -->
  <div class="flex flex-col gap-4 text-2xl text-left">
  <div class="mt-9">

    <ol> <li>* not yet mobile responsive.</li><li>Developed a single-page guitar tuner app using Svelte and Vite, showcasing proficiency in lightweight and performant web development.</li><br/> <li>Utilized Tone.js library to accurately generate the corresponding pitches for standard guitar tuning, providing a reliable and convenient tuning solution.</li><br/> <li>Implemented the entire app functionality within the main App.svelte file for efficient component-based architecture and code organization.</li><br/> <li>Deployed the guitar tuner app to Vercel for seamless integration with Svelte and Vite - easy deployment and hosting.</li><br/> <li>Optimized the app for fast loading and responsiveness, ensuring a smooth user experience for guitarists seeking a quick and reliable tuning tool.</li> Stretch cases: improve aesthetic detail and more tunings!<br/>
  </div>
  </div>

    <!-- Tech Stack -->
    <div class="flex flex-col border-solid border-slate-600 dark:border-white border-2 dark:border-2 mb-44 rounded-lg w-52 p-4">
      <p class="text-3xl mt-4 mb-1">Client Side</p>
      <ul class="text-[22px] text-emerald-600">
        <li class="py-1">JavaScript</li>
        <li>Svelte.js</li>
      </ul>
      <p class="text-3xl mt-4 mb-1">Styling</p>
      <ul class="text-[22px] text-cyan-500">
        <li class="py-1">Tailwind CSS</li>
      </ul>
      <p class="text-3xl mt-4 mb-1">Deployment</p>
      <ul class="text-[22px] text-red-400">
        <li>Vercel</li>
      </ul>
    </div>
  </div>
  </div>
  <!-- Embedded app (iframe) -->
  <div class="flex justify-center rounded-lg border-4 dark:border-solid border-slate-600 dark:border-white mx-[15px] text-center bg-white bg-opacity-5">
    <div class="iframe-wrapper">
      <iframe src="https://tuner-m26o.vercel.app/" class="iframe-content" title="Online Guitar Tuner"></iframe>
    </div>
  </div>
</tuner>

<style>
  .iframe-wrapper {
    width: 700px;
    height: 390px;
    overflow: hidden;
  }

  .iframe-content {
    width: 140%;
    height: 140%;
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>