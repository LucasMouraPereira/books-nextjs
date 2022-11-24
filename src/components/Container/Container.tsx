import * as S from './Container.styles'

import type { ChildrenProps } from 'types/Children'

const Container = ({ children }: ChildrenProps) => (
  <S.Container>{children}</S.Container>
)

export default Container
