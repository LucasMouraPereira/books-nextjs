import * as S from './RoundButton.styles'

type RoundButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick: () => void
  rotation: boolean
}

const RoundButton = ({
  children,
  disabled = false,
  onClick,
  rotation
}: RoundButtonProps) => (
  <S.WrapperRoundButton
    disabled={disabled}
    rotation={rotation}
    type="button"
    onClick={() => onClick()}
  >
    {children}
  </S.WrapperRoundButton>
)

export default RoundButton
