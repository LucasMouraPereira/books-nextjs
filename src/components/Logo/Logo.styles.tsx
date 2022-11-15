import styled, { css } from 'styled-components'
import { theme } from 'styles/theme/main'

type StyleProps = {
  isDark: boolean
}

export const WrapperLogo = styled.div`
  ${({ isDark }: StyleProps) => css`
    width: 100%;
    max-width: 207px;
    color: ${isDark ? theme.colors.text.dark : theme.colors.text.light};
    span {
      vertical-align: middle;
    }

    span:last-child {
      width: 100%;
      font-weight: 300;
      font-size: 28px;
      line-height: 40px;
      margin-left: 16px;
    }
  `}
`
