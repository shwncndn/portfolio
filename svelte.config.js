import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { githubAdapter } from 'svelte-adapter-github';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the githubAdapter for deploying to GitHub Pages
    adapter: githubAdapter(),
  },
  preprocess: vitePreprocess()
};

export default config;