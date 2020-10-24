/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

import { AppProps } from 'next/app'
// import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}