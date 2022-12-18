import styled, { css } from 'styled-components'

export const WrapperForm = styled.div`
  ${() => css`
    background: white;
    border-radius: 20px;
    padding: 0px 0px 0 14px;
  `}
`
export const Form = styled.form`
  ${() => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
    border-radius: 20px;
    gap: 8px;
    input {
      font-size: 12px;
      font-weight: 400;
      color: #ab2680;
      min-height: 30px;
      border: none;
      border-radius: 15px;
      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        margin-left: 0.4em;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' /></svg>");
        cursor: pointer;
      }
    }
  `}
`
export const WrapperButton = styled.div`
  ${() => css`
    height: 32px;
    button {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  `}
`
