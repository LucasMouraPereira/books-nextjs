import Logo from 'components/Logo'
import Logout from './Logout'

import * as S from './Header.styles'

const Header = () => (
  <S.WrapperHeader>
    <Logo isDark={true} />
    <Logout />
  </S.WrapperHeader>
)

export default Header
