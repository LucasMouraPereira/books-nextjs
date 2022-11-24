import ArrowIcon from '/public/icons/ic-arrow.svg'
import { useMediaQuery } from 'hooks/useMediaQuery'

import RoundButton from 'components/RoundButton'

import * as S from './Pagination.styles'

type PaginationProps = {
  page: number
  totalPages: number
  goBack: () => void
  goNext: () => void
}

const Pagination = ({ page, totalPages, goBack, goNext }: PaginationProps) => {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  return (
    <S.WrapperPagination>
      {!isMobile ? (
        <>
          <S.WrapperText>
            Página <span>{page}</span> de <span>{totalPages}</span>
          </S.WrapperText>

          <S.WrapperRoundButton>
            <RoundButton
              disabled={page === 1 ? true : false}
              onClick={goBack}
              rotation={true}
            >
              <ArrowIcon />
            </RoundButton>
            <RoundButton
              disabled={page === totalPages ? true : false}
              onClick={goNext}
              rotation={false}
            >
              <ArrowIcon />
            </RoundButton>
          </S.WrapperRoundButton>
        </>
      ) : (
        <>
          <S.WrapperRoundButton>
            <RoundButton
              disabled={page === 1 ? true : false}
              onClick={goBack}
              rotation={true}
            >
              <ArrowIcon />
            </RoundButton>
            <S.WrapperText>
              Página <span>{page}</span> de <span>{totalPages}</span>
            </S.WrapperText>
            <RoundButton
              disabled={page === totalPages ? true : false}
              onClick={goNext}
              rotation={false}
            >
              <ArrowIcon />
            </RoundButton>
          </S.WrapperRoundButton>
        </>
      )}
    </S.WrapperPagination>
  )
}

export default Pagination
