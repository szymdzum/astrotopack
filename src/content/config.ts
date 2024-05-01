import { z, defineCollection } from 'astro:content';

const sectionHeader = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
});

const features = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        imgSrc: image(),
      })
    ),
});

export type SectionHeader = z.infer<typeof sectionHeader>;

const sections = defineCollection({
  type: 'content',
  schema: sectionHeader,
});

export const collections = {
  page: features,
  landing: sections,
};
