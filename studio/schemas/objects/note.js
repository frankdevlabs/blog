import {MdChatBubbleOutline} from 'react-icons/md'

export default {
  name: 'note',
  type: 'object',
  title: 'Footnote',
  blockEditor: {
    icon: MdChatBubbleOutline
  },
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal note', value: 'normal-note'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {type: 'link'},
              {type: 'internalLink'}
            ]
          }

        }
      ]
    }
  ]
}
