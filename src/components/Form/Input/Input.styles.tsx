import styled, { css } from 'styled-components'

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 368px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(1px);
    border-radius: 4px;
    background: ${theme.colors.overlay.mediumLight};
    gap: 4px;
    padding-left: 16px;
    label {
      width: fit-content;
      font-family: ${theme.typography.family.primary};
      font-weight: ${theme.typography.weight.regular};
      font-size: ${theme.typography.sizes.xs};
      line-height: 16px;
      color: ${theme.colors.text.light};
      opacity: 0.5;
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      width: 100%;
      max-width: 224px;
      height: 24px;
      outline: none;
      background: border-box;
      border: none;
      font-family: ${theme.typography.family.primary};
      font-weight: ${theme.typography.weight.regular};
      font-size: ${theme.typography.sizes.sm};
      line-height: 24px;
      color: ${theme.colors.text.light};
      &:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: ${theme.colors.text.light};
        -webkit-box-shadow: 0 0 0px 1000px #c35d7d inset;
        backdrop-filter: blur(1px);
        border-radius: 4px;
      }
    }
  `}
`
