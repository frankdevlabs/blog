import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page Content',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the page',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    }),
    defineField({
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    }),
    defineField({
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
    },
  },
})
