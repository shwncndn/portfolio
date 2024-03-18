import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const ProjectHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs = [
    { name: "Tuner", link: "/projects/tuner" },
    {
      name: "SoundLift",
      link: "/projects/soundlift"
    },
    { name: "Tonex", link: "/projects/tonex" }
  ];
  return `<header class="sticky z-[10] top-0 duration-200 px-6 flex justify-between"><div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$unsubscribe_page();
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (y > 0 ? "opacity-full pointer-events-auto" : "pointer-events-none opacity-0"),
    0
  )}></div> ${$page.url.pathname !== "/" ? `${validate_component(ProjectHeader, "ProjectHeader").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}</div> `;
});
export {
  Layout as default
};
