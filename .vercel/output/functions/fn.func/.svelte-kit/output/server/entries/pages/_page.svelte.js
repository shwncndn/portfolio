import { c as create_ssr_component, d as escape, b as add_attribute, v as validate_component, e as each } from "../../chunks/ssr.js";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-4 my-4 sm:p-6 md:p-8 mt-20 pt-12 sm:pt-14 md:pt-16 flex flex-col gap-4 rounded-lg border border-solid border-white bg-slate-700 bg-opacity-10 text-center group cursor-pointer duration-200" role="button" tabindex="0"><div class="grid place-items-center px-4 text-5xl md:text-6xl -mt-16 sm:-mt-20 md:-mt-24 mx-auto" data-svelte-h="svelte-1lspy9y"><div class="bg-slate-950 border rounded-full border-slate-950">Shawn Condon</div></div> ${`<div class="text-4xl mt-6 mb-10" data-svelte-h="svelte-1x7cc2y">Software Engineer
		<h2 class="mt-14 font-bold text-xl">Port Saint Lucie, Florida, USA</h2> <h3 class="mt-14 text-lg font-bold">shwn.cndn@gmail.com</h3></div>`}</div>`;
});
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  let { borderColor } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  return `<div class="${"p-6 sm:p-8 md:p-10 flex flex-col gap-6 rounded-lg border border-solid " + escape(borderColor, true) + " text-center group cursor-pointer hover:" + escape(borderColor, true) + " duration-200 bg-teal-100 bg-opacity-5"}"><div class="grid place-items-center px-6 text-6xl md:text-7xl -mt-14 sm:-mt-16 md:-mt-18 lg:-mt-20 mx-auto"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="text-3xl font-bold mb-2">${escape(step.name)}</h3> ${step.name === "Elixir" ? `<p class="text-lg mb-4" data-svelte-h="svelte-1gxcad">Functional and Fault-Tolerant Full Stack</p>` : `${step.name === "JavaScript" ? `<p class="text-lg mb-4" data-svelte-h="svelte-alr3go">and Web native</p>` : `${step.name === "Database + Deployment" ? `<p class="text-[17px] mb-4" data-svelte-h="svelte-drljkq">Version Control, CI/CD, Cloud and DB Solutions</p>` : ``}`}`} ${``}</div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-48 m-4 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-white bg-white bg-opacity-5 text-center group duration-200" data-svelte-h="svelte-tmkwk3"><div><h1 class="text-[]">Projects + Contributions</h1></div> <div><a href="/projects/tuner" class="hover:text-purple-400">Tuner</a> <a href="/projects/soundlift" class="hover:text-purple-400">Soundlift</a> <a href="/projects/caption-crew" class="hover:text-purple-400">Caption Crew</a> <a href="/projects/tonex" class="hover:text-purple-400">Tonex</a></div></div>`;
});
const LearnMoreButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mt-4 gap-[370px] flex flex-row justify-center" data-svelte-h="svelte-ldib8r"><div class="p-2 sm:p-8 md:p-4 flex flex-col rounded-lg border-2 border-solid bg-teal-100 bg-opacity-5 hover:border-purple-300"><a href="tech/elixir">Learn More</a></div> <div class="p-2 sm:p-8 md:p-4 flex flex-col rounded-lg border-2 border-solid bg-teal-100 bg-opacity-5 hover:border-emerald-200"><a href="tech/js">Learn More</a></div> <div class="p-2 sm:p-8 md:p-4 flex-col rounded-lg border-2 border-solid bg-teal-100 bg-opacity-5 hover:border-blue-300"><a href="tech/data">Learn More</a></div></div>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Elixir",
      icon: "fa-solid fa-flask-vial",
      borderColor: "border-purple-300 border-2",
      items: [
        { name: "Ecto" },
        { name: "Nerves" },
        { name: "Phoenix" },
        { name: "LiveView" },
        { name: "Livebook" },
        { name: "LiveView Native" }
      ]
    },
    {
      name: "JavaScript",
      icon: "fa-solid fa-globe",
      borderColor: "border-emerald-200 border-2",
      items: [
        { name: "Node.js" },
        { name: "Tone.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Svelte.js" },
        { name: "LiveSvelte / SvelteKit" }
      ]
    },
    {
      name: "Database + Deployment",
      icon: "fa-solid fa-server",
      borderColor: "border-blue-300 border-2",
      items: [
        { name: "Git" },
        { name: "AWS" },
        { name: "CI/CD" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "PostgreSQL" }
      ]
    }
  ];
  return `<main>${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})} <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${each(steps, (step) => {
    return `${validate_component(Step, "Step").$$render($$result, { step, borderColor: step.borderColor }, {}, {})}`;
  })}</div> ${validate_component(LearnMoreButtons, "LearnMoreButtons").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} <div class="flex flex-row justify-center" data-svelte-h="svelte-16t443x"></div></main>`;
});
const css = {
  code: ".content-wrapper.svelte-17243j1{position:relative;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content-wrapper svelte-17243j1">${validate_component(Main, "Main").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
