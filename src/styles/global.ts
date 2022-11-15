import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      border-width: 0;
      border-style: solid;
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      accent-color: ${theme.colors.primary.main};
      color: ${theme.colors.text.dark};
      font-family: ${theme.typography.family.primary};
      font-size: ${theme.typography.sizes.md};
    }

    a {
      text-decoration: none;
    }

    ::-webkit-scrollbar {
      height: 1rem;
      width: 1rem;
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.primary.main};
      border-radius: ${theme.shapes.borderRadius.full};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary.main};
      border-radius: ${theme.shapes.borderRadius.full};
    }
  `}
`
