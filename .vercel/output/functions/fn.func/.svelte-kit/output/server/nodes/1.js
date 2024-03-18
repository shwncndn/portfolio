

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.qFl9pugt.js","_app/immutable/chunks/scheduler.B-4f9cya.js","_app/immutable/chunks/index.Ds_-34h8.js","_app/immutable/chunks/stores.ad8kVH8D.js","_app/immutable/chunks/entry.DhgnhRnc.js"];
export const stylesheets = [];
export const fonts = [];
