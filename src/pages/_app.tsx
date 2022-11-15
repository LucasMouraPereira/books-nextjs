import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/auth'
import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme/main'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  </ThemeProvider>
)

export default App
