<hearing>
<div class="m-4 p-4 mt-10 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg dark:border border-2 border-solid dark:border-white border-slate-600 text-center bg-white bg-opacity-5">
  <h1 class="text-4xl sm:text-5xl md:text-6xl mb-">Capstone</h1>
  <!-- Github Repo -->
  <div class="flex items-center justify-center mt-1">
    <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
    </svg>
    <a href="https://github.com/soundlift-audiometry" class="text-sm sm:text-base md:text-lg hover:text-violet-400">https://github.com/shwncndn/soundlift-audiometry</a>
  </div>
  <!-- tldr -->
  <p class="text-lg sm:text-base md:text-3xl mt-4"><span class="text-[28px] dark:text-amber-300 mr-2">tl;dr </span> Final Liveview Project for DockYard Academy.</p>
  <div class="flex flex-row justify-center gap-52 mt-10 mb-4">
  <!-- Details -->
  <div class="flex flex-col gap-4 text-2xl text-left mt-14">
<ol><ol></ol><br/> <li> Online audiometry exam built using Phoenix Liveview and JS interop with Tone.js.</li><br/><li>Requirements: PubSub, Ecto, external API/library/service interaction, authentication and authorization.</li><br/><li>Ecto/Postgres database layer, used Phoenix PubSub architecture to update a counter displaying number of times the test has been taken in real time.</li><br/><li>Integer value corresponding to volume for each step of test is accumulated and scored for test results against range of measured potential hearing loss.</li><ol></ol><br/>
  </div>

    <!-- Tech Stack -->
    <div class="flex flex-col dark:border border-2 border-solid dark:border-white border-slate-600 rounded-lg w-52 mb-28 p-4">
      <p class="text-3xl mt-4 mb-1">Client Side</p>
      <ul class="text-[22px] text-emerald-600">
        <li class="py-1">JS Interop</li>
      </ul>
      <p class="text-3xl mt-4 mb-1">Server Side</p>
      <ul class="text-[22px] text-slate-500">
        <li class="py-1">Elixir</li>
        <li>Phoenix/Liveview</li>
      </ul>
      <p class="text-3xl mt-4 mb-1">Styling</p>
      <ul class="text-[22px] text-sky-500">
        <li class="py-1">Tailwind CSS</li>
      </ul>
      <p class="text-3xl mt-4 mb-1">Deployment</p>
      <ul class="text-[22px] text-red-400">
        <li>None</li>
      </ul>
    </div>
  </div>
  </div>
</hearing>