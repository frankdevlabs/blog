import {useState, useEffect} from 'react'

export const COLOR_PRIMARY = 'salmon'

export const CUBIC_BEZIER_TRANSITION = '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
// export const EASE_IN_OUT_TRANSITION = '0.3s ease-in-out'
export const BACKGROUND_TRANSITION_TIME = '0.75s'

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const storedTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')
  const toggleTheme = () =>
    setTheme(prevTheme => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])
  return [theme, toggleTheme]
}

const baseTheme = {
  outerPadding: '60px',
  outerPaddingXL: '45px',
  outerPaddingMD: '20px',
  outerPaddingSM: '2rem'
}

export const getTheme = theme =>
  theme === 'light'
    ? {
        background: '#FEFBF4',
        color: '#09192B',
        secondary: '#D9BF65',
        muted: 'hsla(0, 0%, 0%, 0.6)',
        borderColor: 'hsla(212, 65%, 100%, 0.09)',
        borderHoverColor: 'transparent',
        ...baseTheme
      }
    : {
        background: '#09192B',
        color: '#FEFBF4',
        secondary: '#D9BF65',
        muted: 'hsla(0, 0%, 100%, 0.60)',
        borderColor: 'hsla(212, 65%, 100%, 0.09)',
        borderHoverColor: COLOR_PRIMARY,
        ...baseTheme
      }
