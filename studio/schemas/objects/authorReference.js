import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    defineField({
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset',
    },
  },
})
