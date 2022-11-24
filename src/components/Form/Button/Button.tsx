import React from 'react'
import * as S from './Button.styles'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ type }: ButtonProps) => (
  <S.WrapperButton type={type}>Entrar</S.WrapperButton>
)

export default Button
