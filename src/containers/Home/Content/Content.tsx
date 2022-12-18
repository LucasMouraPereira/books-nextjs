import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { nanoid } from 'nanoid'

const withoutImage = '/image/livro-sem-capa.png'

import { useBooksContext } from 'contexts/booksContext'

import * as S from './Content.styles'

import type { BookContextDefaultValues } from 'types/Books'

const Content = () => {
  const { bookDetails, isLoadingDetails }: BookContextDefaultValues =
    useBooksContext()

  if (isLoadingDetails) {
    return <Skeleton count={1} width="240px" height="100vh" />
  }
  return (
    <S.WrapperContent>
      <S.WrapperImage>
        <Image
          src={bookDetails.imageUrl || withoutImage}
          alt={bookDetails.title}
          width={349}
          height={512.29}
          layout="fill"
          quality={100}
        />
      </S.WrapperImage>
      <S.WrapperText>
        <div>
          <h5>{bookDetails.title}</h5>
          {bookDetails.authors.map((author: string) => (
            <S.Author key={nanoid()}>{author}, </S.Author>
          ))}
        </div>
        <S.WrapperInfo>
          <h6>Informações</h6>
          <S.WrapperItem>
            <span>Páginas</span>
            <span>{bookDetails.pageCount} páginas</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>Editora</span>
            <span>Editora {bookDetails.publisher}</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>Publicação</span>
            <span>{bookDetails.published}</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>Idioma</span>
            <span>{bookDetails.language}</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>Título Original</span>
            <span>{bookDetails.title}</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>ISBN-10</span>
            <span>{bookDetails.isbn10}</span>
          </S.WrapperItem>
          <S.WrapperItem>
            <span>ISBN-13</span>
            <span>{bookDetails.isbn13}</span>
          </S.WrapperItem>
        </S.WrapperInfo>
        <S.WrapperDescription>
          <h6>Resenha da editora</h6>
          <p>{bookDetails.description}</p>
        </S.WrapperDescription>
      </S.WrapperText>
    </S.WrapperContent>
  )
}

export default Content
