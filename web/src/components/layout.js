import React, {useContext} from 'react'
import Header from './header'
import {Link} from 'gatsby'
import mq from '../lib/media'
import ThemeContext from './ThemeContext'
import {getTheme} from '../lib/theme'

const Layout = ({children}) => {
  const {theme} = useContext(ThemeContext)
  const {outerPadding, outerPaddingXL, outerPaddingMD, outerPaddingSM} = getTheme(theme)
  return (
    <>
      <Header />
      <section className='hero-section' css={{
        paddingBottom: '25vh',
        [mq('md')]: {
          paddingBottom: '15vh'
        },
        [mq('sm')]: {
          paddingBottom: '5vh'
        }
      }}>
        <div className='container' css={{paddingTop: '10vh'}}>
          <h1 className='title'>Frank’s Blog</h1>
          <h2 className='sub-title'>Hier schrijf ik over legal en tech.</h2>
        </div>
      </section>
      <main>{children}</main>
      <footer css={{
        padding: `125px ${outerPadding} 0 ${outerPadding}`,
        [mq('lg')]: {
          padding: `125px ${outerPaddingXL} 0 ${outerPaddingXL}`
        },
        [mq('md')]: {
          padding: `60px ${outerPaddingMD} 0 ${outerPaddingMD}`
        },
        [mq('sm')]: {
          padding: `35px ${outerPaddingSM} 0 ${outerPaddingSM}`
        }
      }}>
        <div className='container' css={{
          borderTop: '1px solid rgba(9, 25, 43, 0.09)'
        }}>
          <div className='flexbox' css={{
            height: '8.5rem',
            justifyContent: 'flex-end'
          }}>
            <Link className='anchor'
              css={{
                fontWeight: '300',
                fontSize: '1.4rem',
                lineHeight: '156.57%',
                letterSpacing: '0.02em'
              }}
              to='/privacy/'>Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
