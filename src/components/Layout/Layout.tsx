import Container from 'components/Container'
import Header from 'components/Header'

import { useMediaQuery } from 'hooks/useMediaQuery'

import * as S from './Layout.styles'

type LayoutProps = {
  type?: string
  children: React.ReactNode
}

const Layout = ({ type, children }: LayoutProps) => {
  const isMobile = useMediaQuery('(max-width: 360px)')
  const bg1 = '/image/background1.jpg'
  const bg2 = isMobile ? '/image/background2_xs.jpg' : '/image/background2.jpg'
  return (
    <S.WrapperLayout bg={type === 'login' ? bg1 : bg2}>
      <Container>
        {type !== 'login' && <Header />}
        {children}
      </Container>
    </S.WrapperLayout>
  )
}

export default Layout
