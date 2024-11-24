/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BDxqZOi7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Base, s as settings } from '../chunks/Container_DwPO3kn1.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = settings.title;
  const description = settings.description;
  const seo = {
    title,
    description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "class": "flex flex-col" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col content-center self-center justify-center space-y-8 grow my-auto py-16"> <div class="flex justify-center max-h-[32rem] w-full max-w-xl mx-auto relative border-b border-neutral-200 dark:border-neutral-800"> <img src="/screenshot.png" alt="Screenshot from Bobbin app" class="object-cover object-top max-w-xs"> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-950 h-1/2 top-1/2"></div> </div> <div class="flex flex-col items-center justify-center space-y-8"> <h5 class="text-sm text-center font-medium bg-neutral-200 dark:bg-neutral-800 rounded-full px-4 py-2">Coming soon</h5> <h1 class="text-7xl text-center tracking-tight font-serif">Sewing made simple</h1> <div class="max-w-xl space-y-4"> <p class="text-xl text-center text-neutral-600 dark:text-neutral-400"> ${title} is the all-in-one app to help you plan, organize, and finish your sewing projects.
</p> </div> </div> </div> ` })} ` })}`;
}, "/Users/mattcastillo/Projects/bobbin-www/src/pages/index.astro", void 0);

const $$file = "/Users/mattcastillo/Projects/bobbin-www/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
