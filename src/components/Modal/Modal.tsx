import RoundButton from 'components/RoundButton'

import CloseIcon from '/public/icons/ic-close.svg'

import { useBooksContext } from 'contexts/booksContext'

import type { BookContextDefaultValues } from 'types/Books'

import * as S from './Modal.styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const { openDetailsBook, allowScroll }: BookContextDefaultValues =
    useBooksContext()
  return (
    <S.WrapperModal>
      <S.Closed>
        <RoundButton
          onClick={() => {
            allowScroll()
            openDetailsBook()
          }}
          rotation={false}
        >
          <CloseIcon />
        </RoundButton>
      </S.Closed>
      <S.ModalContent>{children}</S.ModalContent>
    </S.WrapperModal>
  )
}

export default Modal
