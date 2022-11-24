import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import RoundButton from 'components/RoundButton'

import LogoutIcon from '/public/icons/ic-logout.svg'

import { useAuthContext } from 'contexts/authContext'

import * as S from './Logout.styles'

const Logout = () => {
  const router = useRouter()
  const { user, setUser } = useAuthContext()

  useEffect(() => {
    const name = localStorage.getItem('user') || ''
    setUser(name)
  }, [])

  const goLogin = () => {
    Cookies.remove('authorization')
    Cookies.remove('refreshToken')
    router.push('/login')
  }

  return (
    <S.WrapperLogout>
      <p>
        Bem vindo, <span>{user}!</span>
      </p>
      <RoundButton onClick={goLogin} rotation={false}>
        <LogoutIcon />
      </RoundButton>
    </S.WrapperLogout>
  )
}

export default Logout
