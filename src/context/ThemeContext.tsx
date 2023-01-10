import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { light } from 'styles/light'
import { dark } from 'styles/dark'

interface ThemeContextProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

interface ThemeProviderProps {
  children: React.ReactNode
}
export enum ThemeType {
  light = 'light',
  dark = 'dark'
}

const themes = {
  dark: dark,
  light: light
}

export function DefaultThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>(ThemeType.dark)

  const toggleTheme = () => {
    const activeTheme =
      theme === ThemeType.light ? ThemeType.dark : ThemeType.light
    setTheme(activeTheme)
    localStorage.setItem('theme', activeTheme)
  }

  useEffect(() => {
    const data = window.localStorage.getItem('theme')
    if (data) {
      setTheme(data as ThemeType)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
