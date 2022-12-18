import styled, { css } from 'styled-components'

export const LinkDetailsCard = styled.div`
  width: 272px;
  height: 160px;
  cursor: pointer;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`

export const WrapperCard = styled.div`
  height: 160px;
  background: #ffffff;
  padding: 16px 28px 19px 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

export const WrapperImage = styled.div`
  width: 100%;
  max-width: 81px;
  height: 122px;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Presentation = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    line-height: 20px;
    h5 {
      font-size: 14px;
      font-weight: bold;
      color: #333333;
    }

    P {
      font-size: 12px;
      font-weight: 400;
      color: #ab2680;
    }
  `}
`

export const BookInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    line-height: 14px;
    span {
      font-family: ${theme.typography.family.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #999999;
    }
  `}
`
