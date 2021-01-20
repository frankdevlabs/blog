import React from 'react'
import Header from './header'
import Footer from './footer'
import CookieNotice from './cookie-notice'
import useCookie from '../lib/useCookie'

const Layout = ({children}) => {
  const [showNotice, setShowNotice] = useCookie('showNotice', 1)
  return (
    <>
      {showNotice ? <CookieNotice set={setShowNotice} /> : ''}
      <Header />
      <main css={{minHeight: '80vh'}}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
