import { defineField, defineType } from 'sanity'
import { MdLaunch } from 'react-icons/md'

export default defineType({
  name: 'link',
  type: 'object',
  title: 'External Link',
  blockEditor: {
    icon: MdLaunch,
  },
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
    }),
  ],
})
