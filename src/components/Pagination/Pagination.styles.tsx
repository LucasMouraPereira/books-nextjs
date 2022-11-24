import styled, { css } from 'styled-components'

export const WrapperPagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
    margin: 16px 16px;
    @media (min-width: ${theme.breakpoints.sm}) {
      justify-content: flex-end;
      margin: 16px 8px;
    }
  `}
`

export const WrapperText = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    span {
      font-weight: 700;
    }
  `}
`

export const WrapperRoundButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (min-width: ${theme.breakpoints.sm}) {
      justify-content: unset;
      align-items: unset;
      gap: 8px;
    }
  `}
`
