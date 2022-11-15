import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: ${theme.spacings.container.xs};

    @media (min-width: ${theme.breakpoints['2xs']}) {
      max-width: ${theme.spacings.container.sm};
    }

    @media (min-width: ${theme.breakpoints.xs}) {
      max-width: ${theme.spacings.container.md};
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: ${theme.spacings.container.lg};
    }

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: ${theme.spacings.container.xl};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: ${theme.spacings.container.xxl};
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: ${theme.spacings.container.xxxl};
    } ;
  `}
`
