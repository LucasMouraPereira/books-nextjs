import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
