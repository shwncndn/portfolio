

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/tuner/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BO25jL94.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/chunks/index.Ds_-34h8.js"];
export const stylesheets = ["_app/immutable/assets/6.DyrLiiQY.css"];
export const fonts = [];
