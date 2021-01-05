import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Figure from './figure'

const BlockRenderer = props => {
  const {style = 'normal'} = props.node

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return React.createElement(style, {className: `heading-${level}`}, props.children)
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    block: BlockRenderer
  },
  hardBreak: false
}

export default serializers
