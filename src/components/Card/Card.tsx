import Image from 'next/image'
import { nanoid } from 'nanoid'

import { useBooksContext } from 'contexts/booksContext'
import type { BooksProps } from 'types/Books'

import * as S from './Card.styles'

type cardProps = {
  id: BooksProps
  url: string
  title: string
  authors: string[]
  pageCount: number
  publisher: string
  published: number
}

const Card = ({
  id,
  url,
  title,
  authors,
  pageCount,
  publisher,
  published
}: cardProps) => {
  const { getBookDetails } = useBooksContext()
  const withoutImage = '/image/livro-sem-capa.png'
  return (
    <S.LinkDetailsCard onClick={() => getBookDetails(id)}>
      <S.WrapperCard>
        <S.WrapperImage>
          <Image
            src={url || withoutImage}
            width={81}
            height={122}
            layout="fill"
            alt={title}
            quality={100}
          />
        </S.WrapperImage>
        <S.WrapperInfo>
          <S.Presentation>
            <h5>{title}</h5>
            {authors?.map((author: string) => (
              <div key={nanoid()}>
                <p>{author}</p>
              </div>
            ))}
          </S.Presentation>
          <S.BookInfo>
            <span>{pageCount} páginas</span>
            <span>Editora {publisher}</span>
            <span>Publicado em {published}</span>
          </S.BookInfo>
        </S.WrapperInfo>
      </S.WrapperCard>
    </S.LinkDetailsCard>
  )
}

export default Card
