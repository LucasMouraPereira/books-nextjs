import styled, { css } from 'styled-components'

export const WrapperLogout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  p {
    display: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    span {
      font-weight: 700;
    }
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.xs}) {
      width: 100%;
      p {
        display: block;
      }
    } ;
  `}
`

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 20px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  cursor: pointer;
  transform: rotate(180deg);
`
