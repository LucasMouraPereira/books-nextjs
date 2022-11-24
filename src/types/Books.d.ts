export type getBooksProps = {
  page: number
  totalPages: number
  amount: number
  authorization: string | undefined
}

export type BooksProps = {
  id: string
}

export type BookList = [
  {
    authors: string[]
    category: string
    description: string
    id: BooksProps | strings
    imageUrl: string
    isbn10: string
    isbn13: string
    language: string
    pageCount: number
    published: number
    publisher: string
    title: string
  }
]

export type BookDetailsValues = {
  authors: string[]
  category: string
  description: string
  id: BooksProps | strings
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  pageCount: number
  published: number
  publisher: string
  title: string
}

export type BookListValues = {
  data: BookList
  totalPages: number
}

export type BookContextDefaultValues = {
  isLoading: boolean
  books: BookList
  isLoadingDetails: boolean
  bookDetails: bookDetailsValues
  props: getBooksProps
  getBookDetails: ({ id }: BooksProps) => void
  goBack: () => void
  goNext: () => void
}
