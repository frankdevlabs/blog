import { defineField, defineType } from 'sanity'
import { MdLink } from 'react-icons/md'

export default defineType({
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  blockEditor: {
    icon: MdLink,
  },
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      to: [{ type: 'post' }, { type: 'author' }],
    }),
  ],
})
