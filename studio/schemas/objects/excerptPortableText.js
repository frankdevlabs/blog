import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'excerptPortableText',
  type: 'array',
  title: 'Excerpt',
  of: [
    defineField({
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [{ type: 'internalLink' }],
      },
    }),
  ],
})
