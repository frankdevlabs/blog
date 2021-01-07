import React, {useEffect} from 'react'
import {format} from 'date-fns'
import nl from 'date-fns/locale/nl'
import PortableText from './portableText'
import Img from 'gatsby-image'
import Prism from 'prismjs'
import SocialShare from './share'
import {getBlogUrl} from '../lib/helpers'

const BlogPost = (props) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const url = 'https://www.brunmontagne.com' + getBlogUrl(props.publishedAt, props.slug.current)

  return (
    <section>
      <article className='container' css={{marginTop: '10vh'}}>
        <h1 className='heading-1'>{props.title}</h1>
        <div className='caption' css={
          {padding: '1rem 0'}}>
          {`${format(props.publishedAt, 'D MMMM YYYY', {locale: nl})}
              | ${props.readingTimeInMinutes}
              ${props.readingTimeInMinutes > 0 ? 'minuten' : 'minuut'} lezen
              |
          `}<SocialShare href={url} title={props.title} />
        </div>
        <div className='snippit-xl' css={{maxWidth: '863px'}}><PortableText blocks={props._rawExcerpt} /></div>
        <div css={{
          height: '44.5rem',
          overflow: 'hidden',
          borderRadius: '4px',
          position: 'relative',
          marginTop: '1.6rem'
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
          }} fluid={props.mainImage.asset.fluid} alt={props.mainImage.alt}
          />
        </div>
        <div className='paragraph' css={{
          paddingTop: '5.6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '688px'
        }}
        >
          {props._rawBody && <PortableText blocks={props._rawBody} />}
        </div>
      </article>
    </section>
  )
}

export default BlogPost
