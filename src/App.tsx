import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

import dark from 'styles/themes/dark'

import Layout from 'components/core/Layout'
import FinancialMovement from 'pages/FinancialMovement'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <FinancialMovement />
      </Layout>
    </ThemeProvider>
  )
}

export default App
