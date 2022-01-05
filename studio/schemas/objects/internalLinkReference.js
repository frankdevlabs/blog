import { MdLink } from 'react-icons/md'

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  blockEditor: {
    icon: MdLink,
  },
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{ type: 'post' }, { type: 'author' }],
    },
  ],
}
