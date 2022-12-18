/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

import Button from '../Button'

import * as S from './Input.styles'

type FormValues = {
  email: string
  password: string
}

type InputProps = {
  label?: string
  type: 'email' | 'password'
  placeholder?: string | undefined
  register: UseFormRegister<FormValues>
  required?: string | undefined
  pattern?: {
    value: RegExp
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
  hasButton?: boolean
}

const Input = ({
  label,
  type,
  placeholder,
  register,
  required,
  pattern,
  minLength,
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
          {...register(type, {
            required: required,
            pattern: pattern,
            minLength: minLength
          })}
        />
      </S.Text>
      {hasButton && <Button type="submit" />}
    </S.WrapperInput>
  )
}

export default Input
