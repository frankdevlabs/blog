import React, {useContext} from 'react'
import LightIcon from './icons/logo-light.svg'
import DarkIcon from './icons/logo-dark.svg'
import {Link} from 'gatsby'
import DarkModeIcon from './icons/dark-mode.svg'
import LightModeIcon from './icons/light-mode.svg'
import ThemeContext from '../theme/ThemeContext'
import {getTheme} from '../theme/theme'
import mq from '../lib/media'

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const {color, secondary, outerPadding, outerPaddingXL, outerPaddingMD, outerPaddingSM} = getTheme(theme)
  return (
    <header css={{
      padding: `32px ${outerPadding} 0 ${outerPadding}`,
      [mq('lg')]: {
        padding: `32px ${outerPaddingXL} 0 ${outerPaddingXL}`
      },
      [mq('md')]: {
        padding: `32px ${outerPaddingMD} 0 ${outerPaddingMD}`
      },
      [mq('sm')]: {
        padding: `32px ${outerPaddingSM} 0 ${outerPaddingSM}`
      }
    }}>
      <div className='container'>
        <div className='flexbox'>
          <div css={{
            marginBottom: '-1.6rem',
            [mq('sm')]: {
              marginBottom: '-1rem',
              maxWidth: '35vw',
              svg: {
                width: '100%'
              }
            }
          }}><Link to='/'>{theme === 'light' ? <LightIcon /> : <DarkIcon />}</Link>
          </div>
          <div css={{
            display: 'flex'
          }}>
            <Link className='anchor' to='/about/' css={{
              fontFamily: 'Ubuntu, sans-serif',
              fontSize: '2.4rem',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '2.8rem',
              letterSpacing: '0em',
              textAlign: 'left',
              color: color,
              paddingTop: '11px',
              marginRight: '30px',
              [mq('sm')]: {
                paddingTop: '0'
              }
            }}>over mij</Link>
            <button
              aria-label='Light and dark mode switch'
              onClick={() => toggleTheme(theme)}
              css={{
                '&:hover svg': {
                  stroke: secondary
                },
                '&:hover svg circle': {
                  stroke: `${secondary} !important`
                },
                '&:hover svg path': {
                  fill: `${secondary} !important`
                },
                [mq('sm')]: {
                  'svg.icon': {
                    width: '25px',
                    height: '25px'
                  }
                }
              }}
            >
              {theme === 'light' ? <LightModeIcon className='icon' /> : <DarkModeIcon className='icon' />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
