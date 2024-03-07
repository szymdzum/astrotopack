import { z, defineCollection } from 'astro:content';

const features = defineCollection({
  type: 'data',
  schema: ({ image }) =>
  z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      imgSrc: image()
    })
  ),
});

export const collections = {
  page: features,
};
