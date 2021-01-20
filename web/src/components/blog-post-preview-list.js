import React from 'react'
import {Link} from 'gatsby'
import {format} from 'date-fns'
import nl from 'date-fns/locale/nl'
import Img from 'gatsby-image'
import PortableText from './portable-text'
import {getBlogUrl} from '../lib/helpers'

const BlogPostPreviewList = (props) => {
  const {nodes} = props
  return (
    <div className='flexbox grid'>
      {nodes && nodes.map((node) => (
        <div key={node.id} className='col' css={{
          'a:hover .overflow': {
            backgroundImage: 'linear-gradient(0deg, rgba(254, 251, 244, 0.31), rgba(254, 251, 244, 0.31))'
          }
        }}>
          <Link to={getBlogUrl(node.publishedAt, node.slug.current)}>
            <div css={{
              height: '24.5rem',
              overflow: 'hidden',
              borderRadius: '4px',
              position: 'relative'
            }}>
              <div className='overflow' css={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                backgroundImage: 'linear-gradient(0deg, rgba(254, 251, 244, 0.51), rgba(254, 251, 244, 0.51))',
                zIndex: '1'
              }} />
              <Img css={{
                height: '100%',
                borderRadius: '4px'
              }} fluid={node.mainImage.asset.fluid} alt={node.mainImage.alt}
              />
            </div>
            <h3 className='heading-3' css={{marginTop: '6px'}}>{node.title}</h3>
            <div className='caption' css={
              {padding: '1px 0'}}>
              {format(node.publishedAt, 'D MMMM YYYY', {locale: nl})} | {node.readingTimeInMinutes} min.
            </div>
            <div className='snippit'><PortableText blocks={node._rawExcerpt} /></div>
          </Link>
        </div>
      ))
      }
    </div>
  )
}

export default BlogPostPreviewList
