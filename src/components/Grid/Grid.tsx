import * as S from './Grid.styles'

type GridProps = {
  children: React.ReactNode
  loading: boolean
}

const Grid = ({ children, loading }: GridProps) =>
  loading ? (
    <S.WrapperGrid>{children}</S.WrapperGrid>
  ) : (
    <S.ContainerGrid>{children}</S.ContainerGrid>
  )

export default Grid
