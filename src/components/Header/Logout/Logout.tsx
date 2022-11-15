import LogoutIcon from '/public/icons/ic-logout.svg'

import * as S from './Logout.styles'

const Logout = () => (
  <S.WrapperLogout>
    <p>
      Bem vindo, <span>Guilherme!</span>
    </p>
    <S.ButtonLogout>
      <LogoutIcon />
    </S.ButtonLogout>
  </S.WrapperLogout>
)

export default Logout
