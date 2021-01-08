import React, {useContext} from 'react'
import {Link} from 'gatsby'
import mq from '../lib/media'
import ThemeContext from './ThemeContext'
import {getTheme} from '../lib/theme'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  const {outerPadding, outerPaddingXL, outerPaddingMD, outerPaddingSM} = getTheme(theme)
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
        borderTop: '1px solid rgba(9, 25, 43, 0.09)'
      }}>
        <div className='flexbox' css={{
          height: '8.5rem',
          justifyContent: 'flex-end'
        }}>
          <button className='anchor' css={{
            fontFamily: 'raleway, sans-serif',
            fontWeight: '300',
            fontSize: '1.4rem',
            lineHeight: '156.57%',
            letterSpacing: '0.02em',
            textDecoration: 'inherit',
            color: 'inherit',
            '&:hover::before': {
              content: '"© 2021 Frank de Vries. Alle rechten voorbehouden"'
            },
            '&:hover span': {
              display: 'none'
            }
          }}>
            <span>Auteursrecht</span>
          </button>
          <div css={{
            '&::before': {
              content: '"|"',
              margin: '0 2rem'
            }
          }} />
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
  )
}

export default Footer
