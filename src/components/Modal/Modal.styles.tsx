import styled, { css } from 'styled-components'

export const WrapperModal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
    transition: opacity 400ms ease-in;
    z-index: 999;
    @media (min-width: ${theme.breakpoints.sm}) {
      align-items: center;
    }
  `}
`
export const Closed = styled.div`
  ${({}) => css`
    position: fixed;
    display: block;
    top: 16px;
    right: 17px;
    button {
      background-color: white;
    }
  `}
`

export const ModalContent = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 2px;
    padding: 24px;
    margin: 64px 0 16px;
    overflow: scroll;
    @media (min-width: ${theme.breakpoints.sm}) {
      padding: 48px;
      margin: unset;
      overflow: hidden;
    }
  `}
`
