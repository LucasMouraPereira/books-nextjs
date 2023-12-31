import Image from 'next/image'
import * as S from './Logo.styles'

type LogoProps = {
  isDark?: boolean
}

const Logo = ({ isDark = false }: LogoProps) => (
  <S.WrapperLogo isDark={isDark}>
    <Image
      src={isDark ? '/image/Logo-black.png' : '/image/Logo-white.png'}
      width={114}
      height={39.7}
      alt="Logo ioasys"
      layout="fixed"
    />
    <span>Books</span>
  </S.WrapperLogo>
)

export default Logo
