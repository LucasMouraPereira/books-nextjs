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
  const { Login, statusAuth } = useAuthContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = data => {
    Login({ email: data.email, password: data.password })
    reset()
  }
  const pattern = {
    value: /\S+@\S+\.\S+/,
    message: 'Este email é invalido.'
  }

  const minLength = {
    value: 8,
    message: 'Sua senha deve ter no mínimo 8 caracteres.'
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="email"
        type="email"
        register={register}
        required="Campo obrigatório"
        pattern={pattern}
      />
      <Input
        label="password"
        type="password"
        register={register}
        required="Campo obrigatório"
        minLength={minLength}
        hasButton
      />
      {errors.email && (
        <S.WrapperMessage>
          <S.triangle />
          <S.ErrorMessage role="alert">{errors.email.message}</S.ErrorMessage>
        </S.WrapperMessage>
      )}
      {errors.password && (
        <S.WrapperMessage>
          <S.triangle />
          <S.ErrorMessage role="alert">
            {errors.password.message}
          </S.ErrorMessage>
        </S.WrapperMessage>
      )}
      {!statusAuth && (
        <S.WrapperMessage>
          <S.triangle />
          <S.ErrorMessage role="alert">
            Email e/ou senha incorretos.
          </S.ErrorMessage>
        </S.WrapperMessage>
      )}
    </S.Form>
  )
}

export default Form
