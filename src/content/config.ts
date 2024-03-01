import { z, defineCollection } from 'astro:content';



const features = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    body: z.string(),
    src: z.string(),
  }),
});

export const collections = {
features
};

console.log(collections);
