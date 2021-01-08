import React from 'react'
import Img from 'gatsby-image'
import ThemeProvider from '../components/ThemeProvider'
import Layout from '../containers/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import PortableText from '../components/portableText'
import SocialShare from '../components/share'

export const query = graphql`
  query AboutPageQuery {
    image: file(relativePath: {eq: "ik.png"}) {
      childImageSharp {
        fluid(maxWidth: 107) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    bio: sanityAuthor(name: {eq: "Frank de Vries"}) {
      id
      name
      _rawBio
    }
  }
`

const AboutPage = props => {
  const title = 'Over mij'
  const url = process.env.GATSBY_HOME_PAGE + props.path
  const image = props.data.image.childImageSharp.fluid
  return (
    <ThemeProvider>
      <Layout>
        <SEO
          title='Over mij'
          description='bla bla'
          type='website'
          path='/'
        />
        <section className='about-section'>
          <div className='container' css={{marginTop: '10vh'}}>
            <div className='flexbox' css={{
              justifyContent: 'flex-start'
            }}>
              <div css={{
                position: 'relative',
                flexGrow: '1',
                maxWidth: '107px',
                marginRight: '2.1rem'
              }}>
                <Img alt='frank de vries' fluid={image} />
              </div>
              <div css={{
                display: 'inline-block'
              }}><h1 className='heading-1'>Hi, ik ben Frank</h1></div>
            </div>
            <div className='snippit-xl' css={{
              maxWidth: '863px',
              paddingTop: '1.2rem'
            }}>
              In mijn blog deel ik als jurist mijn facinatie voor tech.
            </div>
            <div className='paragraph' css={{
              paddingTop: '5.6rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '688px',
              borderBottom: '1px solid rgba(9, 25, 43, 0.09)'
            }}
            >
              {props.data.bio._rawBio && <PortableText blocks={props.data.bio._rawBio} />}
              <div css={{
                fontFamily: 'Ubuntu, sans-serif',
                fontWeight: '300',
                fontSize: '1.4rem',
                lineHeight: '156.57%',
                letterSpacing: '0.02em',
                textAlign: 'right',
                padding: '2.6rem 0 3.6rem 0'
              }}><SocialShare href={url} title={title} /></div>
            </div>
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  )
}

export default AboutPage
