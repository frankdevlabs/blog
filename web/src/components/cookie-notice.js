import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'gatsby'
import CookieIcon from './icons/cookie.svg'
import Button from './button'
import mq from '../lib/media'
import ThemeContext from '../theme/ThemeContext'
import {getTheme} from '../theme/theme'

const CookieNotice = ({set}) => {
  const {theme} = useContext(ThemeContext)
  const {modalBackground} = getTheme(theme)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true)
    }, 2000)
    return () => clearTimeout(timer)
  })
  return (
    <div
      className="container"
      css={{
        position: 'relative'
      }}
    >
        <div
          css={{
            position: 'absolute',
            top: '75.5vh',
            left: `${active ? '2rem' : '-46rem'}`,
            maxWidth: '410px',
            height: '100vh',
            transition: 'all .5s ease-in-out',
            [mq('sm')]: {
              left: `${active ? '0rem' : '-46rem'}`
            }
          }}
          >
          <div
            css={{
              position: 'fixed',
              maxWidth: '410px',
              maxHeight: '304px',
              background: modalBackground,
              boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.15)',
              borderRadius: '5px',
              padding: '3.9rem 4.1rem',
              opacity: `${active ? '1' : '0'}`,
              transition: 'all .5s ease-in-out',
              zIndex: '100',
              [mq('sm')]: {
                margin: '2rem auto',
                left: `${active ? '0rem' : '-46rem'}`,
                right: '0',
                width: '94%'
              }
            }}
          >
            <div css={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <CookieIcon/>
            </div>
            <p
              css={{
                fontWeight: '300',
                fontSize: '1.6rem',
                lineHeight: '156.57%',
                textAlign: 'center',
                paddingTop: '2.5rem'
              }}>
                Deze website maakt gebruik van functionele en analytische cookies en vergelijkbare technieken.{' '}
                <Link className='anchor' to="/privacy/">Meer informatie</Link>
            </p>
            <div
              css={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '3.5rem'
              }}
            >
              <Button onClick={() => set(0)}>Sluiten</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CookieNotice
