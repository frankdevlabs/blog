import React, {useContext} from 'react'
import {Link} from 'gatsby'
import RSSFeedIcon from './icons/rss-feed.svg'
import mq from '../lib/media'
import ThemeContext from '../theme/ThemeContext'
import {getTheme} from '../theme/theme'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  const {outerPadding, outerPaddingXL, outerPaddingMD, outerPaddingSM, borderColor} = getTheme(theme)
  return (
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
        borderTop: `1px solid ${borderColor}`
      }}>
        <div className='flexbox' css={{
          height: '8.5rem',
          justifyContent: 'space-between',
          [mq('sm')]: {
            justifyContent: 'space-around',
            flexDirection: 'column-reverse'
          }
        }}>
          <span css={{
            fontWeight: '300',
            fontSize: '1.4rem',
            lineHeight: '156.57%',
            letterSpacing: '0.02em',
            [mq('sm')]: {
              fontSize: '1rem'
            }
          }}>© 2021 Frank de Vries. Alle rechten voorbehouden</span>
          <div css={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link className='anchor'
              css={{
                fontWeight: '300',
                fontSize: '1.4rem',
                lineHeight: '156.57%',
                letterSpacing: '0.02em'
              }}
              to='/privacy/'>Privacy</Link>
            <div css={{'&::before': {content: '"|"', margin: '0 2rem'}}} />
            <a css={{
              fontWeight: '300',
              fontSize: '1.4rem',
              lineHeight: '156.57%',
              letterSpacing: '0.02em',
              cursor: 'pointer',
              position: 'relative',
              '&::before': {
                display: 'inline-block',
                width: '15px',
                content: '""'
              }
            }} className="anchor" href="/feeds/rss.xml">
              <RSSFeedIcon css={{
                position: 'absolute',
                left: '0'
              }} />
              RSS Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
