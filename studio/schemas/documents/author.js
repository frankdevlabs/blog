import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'twitter',
      type: 'string',
      title: 'Twitter account',
      description: 'e.g. @name',
    }),
    defineField({
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    }),
    defineField({
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      slug: 'slug',
      media: 'image',
    },
  },
})
