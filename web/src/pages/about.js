import React, {useContext} from 'react'
import Img from 'gatsby-image'
import Layout from '../containers/layout'
import SEO from '../components/seo'
import {graphql, Link} from 'gatsby'
import PortableText from '../components/portable-text'
import SocialShare from '../components/share'
import ReadMore from '../components/read-more'
import mq from '../lib/media'
import ThemeContext from '../theme/ThemeContext'
import {getTheme} from '../theme/theme'

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
  const url = process.env.GATSBY_HOME_PAGE + '/about/'
  const image = props.data.image.childImageSharp.fluid
  const {theme} = useContext(ThemeContext)
  const {borderColor} = getTheme(theme)
  return (
      <Layout>
        <SEO
          title='Over mij'
          description='In mijn blog deel ik als jurist mijn fascinatie voor tech.'
          type='website'
          path="/about/"
        />
        <section className='about-section'>
          <div className='container' css={{
            marginTop: '10vh',
            [mq('sm')]: {
              marginTop: '5vh'
            }
          }}>
            <div className='flexbox' css={{
              justifyContent: 'flex-start'
            }}>
              <div css={{
                position: 'relative',
                flex: '0 1 15vw',
                maxWidth: '107px',
                marginRight: '2.1rem',
                [mq('sm')]: {
                  minWidth: '8.3rem'
                }
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
              In mijn blog deel ik als jurist mijn fascinatie voor tech.
            </div>
            <div className='paragraph' css={{
              paddingTop: '5.6rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '688px',
              borderBottom: `1px solid ${borderColor}`
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
              }}><SocialShare href={url} title={title}>Deel deze pagina via</SocialShare></div>
            </div>
          </div>
        </section>
        <ReadMore>
          <p>Bekijk dan <Link className='anchor' to='/'>mijn blogs.</Link>
          </p>
        </ReadMore>
      </Layout>
  )
}

export default AboutPage
