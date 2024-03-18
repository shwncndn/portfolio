import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
const CaptionCrew = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-48 m-4 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-white text-center group cursor-pointer duration-200" data-svelte-h="svelte-190jfp1"><div class="flex flex-row"><div>Main site for Caption Crew, Inc.<br>
            
            Elixir/Phoenix/LiveView<br>
             Site Author</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CaptionCrew, "Captioncrew").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
