

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CYuUsfhM.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/chunks/index.Ds_-34h8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.vVsAvA0a.css"];
export const fonts = [];
