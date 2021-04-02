import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

import dark from 'styles/themes/dark'
import light from 'styles/themes/light'

interface IThemeContext {
  toggleTheme: () => void
  theme: DefaultTheme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

function useTheme(): IThemeContext {
  const context = React.useContext(ThemeContext)

  return context
}

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<DefaultTheme>(() => {
    const savedTheme = localStorage.getItem('$financials:theme')

    if (savedTheme) {
      return JSON.parse(savedTheme)
    } else {
      return dark
    }
  })

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
      localStorage.setItem('$financials:theme', JSON.stringify(light))
    } else {
      setTheme(dark)
      localStorage.setItem('$financials:theme', JSON.stringify(dark))
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, useTheme }
