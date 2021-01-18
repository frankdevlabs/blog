import React, {useEffect, useState} from 'react'
import {node} from 'prop-types'
import {Global, css, ThemeProvider as EmotionThemeProvider} from '@emotion/react'

import ThemeContext from './ThemeContext'
import {
  useTheme,
  getTheme,
  CUBIC_BEZIER_TRANSITION,
  BACKGROUND_TRANSITION_TIME
} from './theme'
import {LIGHT_CODE_THEME, DARK_CODE_THEME} from '../styles/code'

import mq from '../lib/media'

const ThemeProvider = ({children}) => {
  const [theme, toggleTheme] = useTheme()
  const [key, forceUpdate] = useState(0)
  const currentTheme = getTheme(theme)
  const darkTheme = getTheme('dark')
  const {color} = currentTheme
  useEffect(() => {
    forceUpdate(1)
    document.body.classList.remove('dark')
  }, [])
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <EmotionThemeProvider theme={currentTheme}>
        <Global
          styles={css({
            '*,*::after,*::before': {
              margin: '0',
              padding: '0',
              boxSizing: 'inherit'
            },
            html: {
              scrollbarColor:
                theme === 'dark' ? `${darkTheme.muted} ${darkTheme.background}` : 'auto',
              fontSize: '62.5%',
              [mq('md')]: {
                fontSize: '56%'
              },
              [mq('sm')]: {
                fontSize: '52.5%'
              }
            },
            body: {
              // for rubber band effect in Chrome on MacOS and outside the scaled div with background color
              backgroundColor: currentTheme.background,
              // add transition delay only after initial rendering for continuing reading while maintaining
              // scroll position in dark mode on refresh
              transitionDelay: theme === 'dark' && key === 1 ? BACKGROUND_TRANSITION_TIME : '0s',
              boxSizing: 'border-box'
            },
            'body.dark': {
              '.theme-wrapper': {
                background: darkTheme.background,
                color: darkTheme.color
              },
              '.muted': {
                color: darkTheme.muted
              }
            },
            select: {
              outline: '0'
            },
            'button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']': {
              webkitAppearance: 'button',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            },
            section: {
              padding: `35px ${currentTheme.outerPadding}`,
              [mq('lg')]: {
                padding: `35px ${currentTheme.outerPaddingXL}`
              },
              [mq('md')]: {
                padding: `35px ${currentTheme.outerPaddingMD}`
              },
              [mq('sm')]: {
                padding: `35px ${currentTheme.outerPaddingSM}`
              }
            },
            '.container': {
              maxWidth: '1160px',
              marginRight: 'auto',
              marginLeft: 'auto'
            },
            '.flexbox': {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            },
            '.flexbox.grid': {
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              margin: '0 -15px'
            },
            '.flexbox.grid .col': {
              marginBottom: '30px',
              flex: '0 1 25%',
              paddingRight: '15px',
              paddingLeft: '15px',
              [mq('lg')]: {
                flex: '0 1 33.3%'
              },
              [mq('md')]: {
                flex: '0 1 50%'
              },
              [mq('sm')]: {
                flex: '0 1 100%'
              }
            }
          })}
        />
        <Global styles={css({
          body: {
            fontFamily: 'raleway, sans-serif',
            fontSize: '1.8rem',
            lineHeight: '175.6%',
            letterSpacing: '0.01em',
            fontWeight: '400',
            fontStyle: 'normal',
            textRendering: 'optimizeLegibility'
          },
          'h1.title': {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: '700',
            fontSize: '17.4rem',
            lineHeight: '159.93px',
            letterSpacing: '-0.1em',
            position: 'relative',
            left: '-10px',
            [mq('lg')]: {
              fontSize: '14.6rem',
              left: '-8px',
              lineHeight: '129.93px'
            },
            [mq('md')]: {
              textAlign: 'center',
              fontSize: '10.4rem',
              lineHeight: '79.93px'
            },
            [mq('sm')]: {
              fontSize: '7.4rem'
            }
          },
          'h2.sub-title': {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: 'normal',
            fontSize: '4.4rem',
            lineHeight: '51px',
            color: theme === 'light' ? 'rgba(9, 25, 43, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            [mq('lg')]: {
              fontSize: '4rem'
            },
            [mq('md')]: {
              textAlign: 'center',
              fontSize: '3.5rem'
            },
            [mq('sm')]: {
              lineHeight: '31px'
            }
          },
          'h1.heading-1': {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: '700',
            fontSize: '9.8rem',
            lineHeight: '96.8%',
            letterSpacing: '-0.1em',
            [mq('lg')]: {
              fontSize: '8.5rem'
            },
            [mq('md')]: {
              fontSize: '7.1rem'
            },
            [mq('sm')]: {
              fontSize: '5rem'
            }
          },
          'h3.heading-3': {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: '500',
            fontSize: '2.1rem',
            lineHeight: '138.6%',
            letterSpacing: '0.02em',
            textDecorationLine: 'underline'
          },
          'h4.heading-4': {
            fontFamily: 'Ubuntu, sans-serif',
            fontWeight: '400',
            fontSize: '1.8rem',
            lineHeight: '138.6%',
            letterSpacing: '0.03em'
          },
          '.paragraph': {
            lineHeight: '3.2rem'
          },
          '.paragraph > div > p:not(:last-child)': {
            marginBottom: '3.4rem'
          },
          '.paragraph > div > h1:not(:last-child)': {
            margin: '6rem 0 1.8rem 0'
          },
          '.paragraph > div > h2:not(:last-child)': {
            margin: '4rem 0 1.2rem 0'
          },
          '.paragraph > div > h3:not(:last-child)': {
            margin: '4rem 0 1rem 0'
          },
          '.paragraph > div > h4:not(:last-child)': {
            margin: '4rem 0 0rem 0'
          },
          '.paragraph li:not(:last-child)': {
            marginBottom: '1rem'
          },
          '.caption': {
            fontFamily: 'Ubuntu, sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '1.4rem',
            lineHeight: '156.57%',
            letterSpacing: '0.02em'
          },
          '.snippit': {
            fontStyle: 'normal',
            lineHeight: '155.6%'
          },
          '.snippit-xl': {
            fontSize: '2.25rem',
            fontStyle: 'normal',
            lineHeight: '3.5rem',
            letterSpacing: '0.01em',
            textAlign: 'left',
            [mq('xl')]: {
              fontSize: '2.2rem'
            }
          },
          a: {
            textDecoration: 'none',
            '&:link': {
              textDecoration: 'inherit',
              color: 'inherit',
              cursor: 'pointer'
            },
            '&:visited': {
              textDecoration: 'inherit',
              color: 'inherit',
              cursor: 'pointer'
            }
          },
          'a.anchor, button.anchor': {
            boxShadow: `${currentTheme.secondary} 0px -0.12em 0px 0px inset`,
            transition: 'box-shadow .2s ease-in-out, color .2s ease-in-out',
            '&:hover': {
              boxShadow: `${currentTheme.secondary} 0px -1.5em 0px 0px inset`,
              color: currentTheme.background
            }
          },
          'ol,ul': {
            paddingLeft: '4rem',
            margin: '3.4rem 0'
          },
          code: {
            background: `${currentTheme.codeBackground}`,
            fontFamily: 'Consolas,Monaco,\'Andale Mono\',\'Ubuntu Mono\',monospace'
          },
          '.code-container': {
            marginBottom: '3.4rem'
          }
        })} />
        <Global styles={css(theme === 'dark' ? DARK_CODE_THEME : LIGHT_CODE_THEME)} />
        <Global
          styles={css(`body.dark {${DARK_CODE_THEME}}`)}
        />
        <div
          className='theme-wrapper'
          css={{
            color,
            transition: CUBIC_BEZIER_TRANSITION,
            zIndex: 1,
            position: 'relative',
            overflow: 'hidden'
          }}
          key={key}
        >
          {children}
        </div>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: node.isRequired
}

export default ThemeProvider
