import { z, defineCollection } from 'astro:content';

// Page Config
const config = z.object({
  pageName: z.string(),
  menu: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
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
  cta: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    })
  ),
});

const heroSection = defineCollection({
  type: 'content',
  schema: hero,
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

// Features
const features = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  features: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
    })
  ),
});

const featuresSection = defineCollection({
  type: 'content',
  schema: features,
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
  siteConfig: siteConfig,
  heroSection: heroSection,
  aboutSection: aboutSection,
  featuresSection: featuresSection,
  servicesSection: servicesSection,
  contactSection: contactSection,
};
