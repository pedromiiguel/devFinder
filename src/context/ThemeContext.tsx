import { createContext, useContext, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { light } from 'styles/light'
import { dark } from 'styles/dark'
import { Theme } from '../../types/styled-components'

interface ThemeContextProps {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

interface ThemeProviderProps {
  children: React.ReactNode
}

export function DefaultThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(light)

  const toggleTheme = () => {
    const changedTheme = theme.title === 'light' ? dark : light
    localStorage.setItem('theme', JSON.stringify(changedTheme))

    setTheme(changedTheme)
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      const localTheme = localStorage.getItem('theme') as string

      setTheme(JSON.parse(localTheme))
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
