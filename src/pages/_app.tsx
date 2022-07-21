import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'

import { DefaultThemeProvider } from '../context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </DefaultThemeProvider>
    </>
  )
}

export default MyApp
