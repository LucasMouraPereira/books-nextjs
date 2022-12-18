import styled, { css } from 'styled-components'

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    @media (min-width: ${theme.breakpoints.sm}) {
      flex-direction: row;
      gap: 48px;
      justify-content: unset;
      align-items: unset;
    }
  `}
`

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    width: 240px;
    height: 351px;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
    @media (min-width: ${theme.breakpoints.sm}) {
      width: 349px;
      height: 512.29px;
    }
  `}
`

export const WrapperText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    h5 {
      width: 100%;
      max-width: 240px;
      font-family: Heebo;
      font-weight: 500;
      font-size: 28px;
      line-height: 40px;
      color: #333333;
    }
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: max-content;
      h5 {
        max-width: 276px;
      }
    }
  `}
`

export const Author = styled.span`
  ${({ theme }) => css`
    width: 100%;
    max-width: 240px;
    font-family: Heebo;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 276px;
    }
  `}
`

export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    width: 240px;
    h6 {
      width: 84px;
      font-family: Heebo;
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 16px;
    }
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: 276px;
    }
  `}
`

export const WrapperItem = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #333333;

    span:nth-child(2) {
      font-family: Heebo;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #999999;
    }
  `}
`

export const WrapperDescription = styled.div`
  ${({ theme }) => css`
    h6 {
      width: 240px;
      font-family: Heebo;
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 16px;
    }
    p {
      width: 100%;
      max-width: 361px;
      font-family: Heebo;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: #999999;
    }
    @media (min-width: ${theme.breakpoints.sm}) {
      h6 {
        width: 276px;
      }
      p {
        width: 100%;
        max-width: 361px;
      }
    }
  `}
`
