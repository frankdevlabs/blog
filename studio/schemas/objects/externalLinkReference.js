import {MdLaunch} from 'react-icons/md'

export default {
  name: 'link',
  type: 'object',
  title: 'External Link',
  blockEditor: {
    icon: MdLaunch
  },
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url'
    }
  ]
}
