import React from 'react'
import { useAuthContext } from 'contexts/authContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from './Input'

import * as S from './Form.styles'

type FormValues = {
  email: string
  password: string
}

const Form = () => {
  const { Login } = useAuthContext()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = data =>
    Login({ email: data.email, password: data.password })

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        name="email"
        register={register}
        required={true}
        maxLength={30}
        errors={errors}
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        register={register}
        required={true}
        maxLength={12}
        errors={errors}
        hasButton
      />
    </S.Form>
  )
}

export default Form
