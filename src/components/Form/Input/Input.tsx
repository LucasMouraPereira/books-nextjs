/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { UseFormRegister } from 'react-hook-form'

import Button from '../Button'

import * as S from './Input.styles'

type FormValues = {
  email: string
  password: string
}

type InputProps = {
  label?: string
  type?: string
  placeholder?: string | undefined
  name: 'email' | 'password'
  register: UseFormRegister<FormValues>
  required?: boolean
  maxLength?: number
  errors?: object | undefined | any
  hasButton?: boolean
}

const Input = ({
  label,
  type,
  placeholder,
  name,
  register,
  required,
  maxLength,
  errors,
  hasButton
}: InputProps) => {
  return (
    <S.WrapperInput>
      <S.Text>
        <label htmlFor={type}>{label}</label>
        <input
          id={type}
          type={type}
          placeholder={placeholder}
          {...register(name, { required, maxLength: maxLength })}
        />
      </S.Text>
      {hasButton && <Button type="submit" />}

      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
    </S.WrapperInput>
  )
}

export default Input
