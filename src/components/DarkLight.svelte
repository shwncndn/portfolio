<script>
    let isDarkMode = false;
  
    function toggleDarkMode() {
      isDarkMode = !isDarkMode;
      document.documentElement.classList.toggle('dark');
    }
  </script>
  
  <button
    class="fixed top-4 right-4 w-20 h-16 bg-neutral-600 dark:bg-white rounded-lg text-white dark:text-black font-semibold"
    on:click={toggleDarkMode}
  >
    {#if isDarkMode}
      LIGHT MODE
    {:else}
      DARK MODE
    {/if}
  </button>