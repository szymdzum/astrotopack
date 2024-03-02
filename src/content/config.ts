import { z, defineCollection } from 'astro:content';

const features = defineCollection({
  type: 'data',
  schema: ({ image }) =>
   z.object({
    title: z.string(),
    description: z.string(),
    imgSrc: image()
  }),
});

console.log(features);

export const collections = {
features
};
