import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/authContext'
import { BooksProvider } from 'contexts/booksContext'
import { SkeletonTheme } from 'react-loading-skeleton'
import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import { theme } from 'styles/theme/main'

import 'react-loading-skeleton/dist/skeleton.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#CCCCCC">
      <AuthProvider>
        <BooksProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </BooksProvider>
      </AuthProvider>
    </SkeletonTheme>
  </ThemeProvider>
)

export default App
