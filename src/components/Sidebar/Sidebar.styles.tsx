import styled, { css } from 'styled-components'
import { Theme } from 'styles/styled'

type styledProps = {
  theme: Theme
  isOpenAside?: boolean
  bg?: string
}

export const Aside = styled.aside`
  ${({ theme, isOpenAside, bg }: styledProps) => css`
    position: absolute;
    width: ${isOpenAside ? '250px' : '25px'};
    transition: width 2s;
    left: 0;
    background: white;
    z-index: 9;
    border-right: 1px solid ${theme.colors.overlay.grayer};
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    background-position-x: center;
    @media (min-width: ${theme.breakpoints.xs}) {
      width: ${isOpenAside ? '250px' : '50px'};
    }
  `}
`
export const WrapperAside = styled.div`
  ${({}) => css`
    height: 100vh;
  `}
`

export const WrapperButton = styled.div`
  ${({ theme, isOpenAside }: styledProps) => css`
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: ${isOpenAside ? '234px' : '8px'};
    transition: margin-left 2s;
    margin-top: 34px;
    button {
      background: white;
    }
    svg {
      width: ${!isOpenAside && '24px'};
    }
    @media (min-width: ${theme.breakpoints.xs}) {
      margin-left: ${isOpenAside ? '234px' : '34px'};
    }
  `}
`

export const Content = styled.div`
  ${({ isOpenAside }: styledProps) => css`
    opacity: ${isOpenAside ? 1 : 0};
    transition: opacity 2s linear;
  `}
`

export const WrapperSearch = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  `}
`

export const WrapperFilter = styled.div`
  ${({ isOpenAside }: styledProps) => css`
    display: ${isOpenAside ? 'flex' : 'none'};
    flex-direction: column;
    opacity: ${isOpenAside ? 1 : 0};
    transition: opacity 2s linear;

    p {
      width: 100%;
      text-transform: uppercase;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 16px;
    }
  `}
`

export const WrapperCheckbox = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `}
`

export const Checkbox = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    width: 197px;
  `}
`
