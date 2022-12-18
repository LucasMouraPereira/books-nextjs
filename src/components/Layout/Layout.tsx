import Container from 'components/Container'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

import * as S from './Layout.styles'

type LayoutProps = {
  type?: string
  children: React.ReactNode
}

const Layout = ({ type, children }: LayoutProps) => {
  const bg1 = '/image/background1.jpg'
  const bg2 = '/image/background2.jpg'
  return (
    <S.WrapperLayout bg={type === 'login' ? bg1 : bg2}>
      {type !== 'login' && <Sidebar />}
      <Container>
        {type !== 'login' && <Header />}
        {children}
      </Container>
    </S.WrapperLayout>
  )
}

export default Layout
