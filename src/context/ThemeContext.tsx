import { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { parseCookies, setCookie } from 'nookies'
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
  const { theme: localTheme } = parseCookies()
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localTheme as ThemeType) || ThemeType.light
  )

  const toggleTheme = () => {
    const activeTheme =
      theme === ThemeType.light ? ThemeType.dark : ThemeType.light
    setTheme(activeTheme)

    setCookie(null, 'theme', activeTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
