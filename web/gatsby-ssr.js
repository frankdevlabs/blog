import React, {createElement} from 'react'
import App from './src/components/app'

const applyDarkModeClass = `
  (function () {
    var mql = window.matchMedia('(prefers-color-scheme: dark)')
    var prefersDarkFromMQ = mql.matches
    var persistedPreference = localStorage.getItem('theme')
    var hasUsedToggle = typeof persistedPreference === 'string'

    try {
      if ((hasUsedToggle && persistedPreference === 'dark') || prefersDarkFromMQ) {
        document.body.classList.add('dark')
      }
    } catch (e) {}
  })()
`

export const onRenderBody = ({setPreBodyComponents}) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass
    }
  })
  setPreBodyComponents([script])
}

export const wrapPageElement = ({element}) => {
  return <App>{element}</App>
}
