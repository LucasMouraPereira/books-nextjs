import * as S from './RoundButton.styles'

type RoundButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  rotation: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

const RoundButton = ({
  children,
  disabled = false,
  onClick,
  rotation,
  type = 'button'
}: RoundButtonProps) =>
  type !== 'submit' ? (
    <S.WrapperRoundButton
      disabled={disabled}
      rotation={rotation}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </S.WrapperRoundButton>
  ) : (
    <S.WrapperRoundButton disabled={disabled} rotation={rotation} type={type}>
      {children}
    </S.WrapperRoundButton>
  )

export default RoundButton
