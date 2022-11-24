import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import Layout from 'components/Layout'
import Logo from 'components/Logo'
import Form from 'components/Form'

import * as S from './Login.styles'

type LoginProps = {
  page?: string
}

const Login = ({ page }: LoginProps) => {
  const router = useRouter()
  const [handlePage, setHandlePage] = useState(true)

  useEffect(() => {
    const authorization = Cookies.get('authorization')
    if (authorization !== undefined) {
      setHandlePage(false)
      router.replace('/')
    }
  }, [])

  if (!handlePage) return null
  return (
    <Layout type={page}>
      <S.WrapperLogin>
        <Logo />
        <Form />
      </S.WrapperLogin>
    </Layout>
  )
}

export default Login
