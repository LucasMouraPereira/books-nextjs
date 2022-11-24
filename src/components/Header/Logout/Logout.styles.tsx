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
