/**
 * Implementation of dark-mode based upon https://github.com/divyanshu013/blog
 * MIT License. Copyright (c) (2019 - Now) Divyanshu Maithani
 */
import {useState, useEffect} from 'react'

export const CUBIC_BEZIER_TRANSITION = '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
export const EASE_IN_OUT_TRANSITION = '0.2s ease-in-out'
export const BACKGROUND_TRANSITION_TIME = '0.75s'

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  let _theme = 'light'

  const storedTheme = (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'auto'
  const mql = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = typeof window !== 'undefined' && mql.matches ? 'dark' : false

  if (storedTheme !== 'auto') _theme = storedTheme
  else if (prefersDarkFromMQ) _theme = prefersDarkFromMQ

  const [theme, setTheme] = useState(_theme)
  const [mode, setMode] = useState(storedTheme === 'auto' ? 'auto' : 'manual')
  const toggleTheme = (prevTheme) => {
    if (mode === 'auto') setMode(() => 'manual')
    setTheme(() => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }
  useEffect(() => {
    if (typeof window !== 'undefined' && mode === 'manual') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme, mode])
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
        borderColor: 'rgba(9, 25, 43, 0.09)',
        codeBackground: '#f5f2f0',
        button: '#09192B',
        buttonText: '#FEFBF4',
        buttonHover: 'rgba(9, 25, 43, 0.93)',
        modalBackground: '#FEFEFE',
        ...baseTheme
      }
    : {
        background: '#09192B',
        color: '#FEFBF4',
        secondary: '#D9BF65',
        borderColor: '#D9BF65',
        codeBackground: '#272822',
        button: '#D9BF65',
        buttonText: '#FEFBF4',
        buttonHover: 'rgba(217, 191, 101, 0.9)',
        modalBackground: '#0E2845',
        ...baseTheme
      }
