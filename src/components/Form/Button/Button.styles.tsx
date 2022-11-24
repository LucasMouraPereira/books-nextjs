import styled, { css } from 'styled-components'

export const WrapperButton = styled.button`
  ${({ theme }) => css`
    width: 85px;
    height: 36px;
    margin-right: 12px;
    cursor: pointer;

    background: ${theme.colors.text.light};
    border-radius: 44px;
    border: none;

    font-family: ${theme.typography.family.primary};
    font-weight: ${theme.typography.weight.medium};
    font-size: ${theme.typography.sizes.sm};
    line-height: 20px;
    color: ${theme.colors.text.purpleSecond};
  `}
`
