import {MdLaunch} from 'react-icons/md'

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  blockEditor: {
    icon: MdLaunch
  },
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [
        {type: 'post'},
        {type: 'author'}
      ]
    }
  ]
}
