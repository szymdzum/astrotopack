import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, j as renderHead, k as renderSlot, m as maybeRenderHead, l as renderComponent } from '../astro_8EX913ld.mjs';
/* empty css                          */

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/layouts/Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-5blmo7yk> <div class="navbar-container" data-astro-cid-5blmo7yk> <div class="navbar-logo" data-astro-cid-5blmo7yk>Logo</div> <div class="navbar-toggle" onclick="toggleMenu()" data-astro-cid-5blmo7yk>
&#9776;
</div> <div class="navbar-menu" data-astro-cid-5blmo7yk> <ul data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="#" data-astro-cid-5blmo7yk>Home</a></li> <li data-astro-cid-5blmo7yk><a href="#" data-astro-cid-5blmo7yk>About</a></li> <li data-astro-cid-5blmo7yk><a href="#" data-astro-cid-5blmo7yk>Services</a></li> </ul> </div> </div> </nav> `;
}, "/Users/szymondzumak/Repositories/astrotopack/src/components/Navbar.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="hero-section" data-astro-cid-bbe6dxrz> <h1 class="hero-title" data-astro-cid-bbe6dxrz>Profesjonalne doradztwo w zakresie raportowania środowiskowego</h1> <p class="hero-subtitle" data-astro-cid-bbe6dxrz>Kompleksowe wsparcie na każdym etapie - od diagnozy obowiązków, przez rejestrację w BDO, aż po optymalizację kosztów związanych z przepisami środowiskowymi.</p> </div>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-aypkf4lp> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/layouts/Container.astro", void 0);

const $$Astro$4 = createAstro();
const $$Center = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Center;
  return renderTemplate`${maybeRenderHead()}<div class="center"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/layouts/Center.astro", void 0);

const $$Astro$3 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  return renderTemplate`${maybeRenderHead()}<div class="grid"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/layouts/Grid.astro", void 0);

const $$Astro$2 = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const FEATURES = [
    {
      title: "Opakowania",
      body: "Opakowania i Produkty Opakowane z W\u0142asnym Brandingiem",
      src: "../../public/images/box.svg"
    },
    {
      title: "Elektronika",
      body: "Urz\u0105dzenia Elektryczne i Elektroniczne, Baterie oraz Akumulatory",
      src: "../../public/images/battery.svg"
    },
    {
      title: "Specjalistyczne",
      body: "Zu\u017Cyte Oleje, Opony, \u015Arodki Smarowe i Specjalistyczne",
      src: "../../public/images/barrel.svg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-vnivfuh2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Center", $$Center, { "data-astro-cid-vnivfuh2": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-vnivfuh2>Features 🦄</h2><p data-astro-cid-vnivfuh2>Testing Grid Layout</p>` })}${renderComponent($$result2, "Grid", $$Grid, { "data-astro-cid-vnivfuh2": true }, { "default": ($$result3) => renderTemplate`${FEATURES.map(({ title, body, src }) => renderTemplate`<div data-astro-cid-vnivfuh2><img${addAttribute(src, "src")} data-astro-cid-vnivfuh2><h3 data-astro-cid-vnivfuh2>${title}</h3><p data-astro-cid-vnivfuh2>${body}</p></div>`)}` })}` })}`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/components/Features.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="about-section" data-astro-cid-v2cbyr3p> <h2 class="about-header" data-astro-cid-v2cbyr3p>About Us</h2> <p class="about-description" data-astro-cid-v2cbyr3p>
We're passionate about delivering the best experience to our users. Our team is dedicated to creating innovative solutions that meet the needs of our community. Discover our journey and the values that drive us.
</p> ${renderComponent($$result, "Features", $$Features, { "data-astro-cid-v2cbyr3p": true })} </div>`;
}, "/Users/szymondzumak/Repositories/astrotopack/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ` })} `;
}, "/Users/szymondzumak/Repositories/astrotopack/src/pages/index.astro", void 0);

const $$file = "/Users/szymondzumak/Repositories/astrotopack/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
