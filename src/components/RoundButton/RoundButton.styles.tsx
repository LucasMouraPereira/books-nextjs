import styled, { css } from 'styled-components'
import { Theme } from 'styles/styled'

type WrapperRoundButton = {
  theme: Theme
  rotation: boolean
  disabled: boolean
}

export const WrapperRoundButton = styled.button`
  ${({ theme, rotation, disabled }: WrapperRoundButton) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 32px;
    height: 32px;
    border: 1px solid ${theme.colors.overlay.grayer};
    border-radius: 20px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    cursor: ${disabled ? 'auto' : 'pointer'};
    transform: ${rotation ? 'rotate(180deg)' : 'rotate(0deg)'};
    svg {
      path {
        stroke: ${disabled && theme.colors.overlay.grayer};
      }
    }
  `}
`
