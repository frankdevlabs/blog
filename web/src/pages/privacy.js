import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ThemeProvider from '../components/ThemeProvider'
import {graphql} from 'gatsby'
import PortableText from '../components/portableText'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query PrivacyPageQuery {
    sanityPage(slug: {current: {eq: "privacy"}}) {
      id
      title
      _rawExcerpt
      _rawBody
      slug {
        current
      }
      mainImage {
        asset {
          fixed (width: 1200) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`

const PrivacyPage = props => {
  return (
    <ThemeProvider>
    <Layout>
      <SEO
        title={props.data.sanityPage.title}
        description={toPlainText(props.data.sanityPage._rawExcerpt)}
        type='website'
        path={'/' + props.data.sanityPage.slug.current}
        image={props.data.sanityPage.mainImage}
      />
      <section className='privacy-section'>
        <div className='container' css={{marginTop: '10vh'}}>
          <h1 className='heading-1'>{props.data.sanityPage.title}</h1>
          <div className='snippit-xl' css={{
            maxWidth: '863px',
            paddingTop: '1.2rem'
          }}>
            {props.data.sanityPage._rawExcerpt && <PortableText blocks={props.data.sanityPage._rawExcerpt} />}
          </div>
          <div className='paragraph' css={{
            padding: '5.6rem 0',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '688px',
            borderBottom: '1px solid rgba(9, 25, 43, 0.09)'
          }}
          >
            {props.data.sanityPage._rawExcerpt && <PortableText blocks={props.data.sanityPage._rawExcerpt} />}
          </div>
        </div>
      </section>
    </Layout>
    </ThemeProvider>
  )
}

export default PrivacyPage
