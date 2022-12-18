import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const WrapperMessage = styled.div`
  position: relative;
`

export const ErrorMessage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(1px);
  border-radius: 4px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
`
export const triangle = styled.div`
  position: absolute;
  bottom: 46px;
  left: 22px;
  width: 21px;
  height: 10px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(1px);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
`
