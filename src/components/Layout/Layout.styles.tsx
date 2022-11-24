import styled, { css } from 'styled-components'

type StyleProps = {
  bg: string
}

export const WrapperLayout = styled.div`
  ${({ bg }: StyleProps) => css`
    display: flex;
    justify-content: center;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    background-position-x: center;
    width: 100vw;
    height: 100vh;
  `}
`
