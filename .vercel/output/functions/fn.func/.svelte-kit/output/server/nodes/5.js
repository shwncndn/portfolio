

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/tonex/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.D35oQNQ7.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/chunks/index.Ds_-34h8.js"];
export const stylesheets = [];
export const fonts = [];
