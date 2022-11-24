import styled, { css } from 'styled-components'

export const WrapperGrid = styled.div`
  ${({ theme }) => css`
    span {
      &[aria-live='polite'] {
        display: grid;
        grid-template-areas:
          'line1'
          'line2'
          'line3'
          'line4'
          'line5'
          'line6'
          'line7'
          'line8'
          'line9'
          'line10'
          'line11'
          'line12';
        grid-gap: 1rem 0.5rem;
        grid-gap: 16px;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xs}) {
          grid-template-areas:
            'line1 line1'
            'line2 line2'
            'line3 line3'
            'line4 line4'
            'line5 line5'
            'line6 line6';
        }
        @media (min-width: ${theme.breakpoints.sm}) {
          grid-template-areas:
            'line1 line1 line1'
            'line2 line2 line2'
            'line3 line3 line3'
            'line4 line4 line4';
        }

        @media (min-width: ${theme.breakpoints.md}) {
          grid-template-areas:
            'line1 line1 line1 line1'
            'line2 line2 line2 line2'
            'line3 line3 line3 line3';
        }
      }
    }
    br {
      display: none;
    }
  `}
`

export const ContainerGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'line1'
      'line2'
      'line3'
      'line4'
      'line5'
      'line6'
      'line7'
      'line8'
      'line9'
      'line10'
      'line11'
      'line12';
    grid-gap: 1rem 0.5rem;
    grid-gap: 16px;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-areas:
        'line1 line1'
        'line2 line2'
        'line3 line3'
        'line4 line4'
        'line5 line5'
        'line6 line6';
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      grid-template-areas:
        'line1 line1 line1'
        'line2 line2 line2'
        'line3 line3 line3'
        'line4 line4 line4';
    }

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-areas:
        'line1 line1 line1 line1'
        'line2 line2 line2 line2'
        'line3 line3 line3 line3';
    }
  `}
`
