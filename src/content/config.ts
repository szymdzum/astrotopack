import { z, defineCollection } from 'astro:content';

// Page Config
const config = z.object({
  pageName: z.string(),
  menu: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
});

const siteConfig = defineCollection({
  type: 'content',
  schema: config,
});

// Hero Section
const hero = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
});

const heroSection = defineCollection({
  type: 'content',
  schema: hero,
});

const intro = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  text: z.array(z.string()),
});

const introSection = defineCollection({
  type: 'content',
  schema: intro,
});

// About Me
const about = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  paragraphs: z.array(z.string()),
});

const aboutSection = defineCollection({
  type: 'content',
  schema: about,
});

const featuresSection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
  }),
});

// Services
const services = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  services: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
    })
  ),
});

const servicesSection = defineCollection({
  type: 'content',
  schema: services,
});

const contact = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
});

const contactSection = defineCollection({
  type: 'content',
  schema: contact,
});

export type AboutMe = z.infer<typeof about>;

export const collections = {
  siteConfig,
  heroSection,
  introSection,
  aboutSection,
  featuresSection,
  servicesSection,
  contactSection,
};
