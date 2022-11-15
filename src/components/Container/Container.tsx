import * as S from './Container.styles'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
)

export default Container
