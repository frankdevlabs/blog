import React from 'react'

import ThemeProvider from '../theme/ThemeProvider'

function App ({children}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
