export type getBooksProps = {
  page: number
  totalPages: number
  amount: number
  authorization: string | undefined
  params:
    | {
        title: string | undefined
        category: string | undefined
      }
    | undefined
    | null
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
  handleListBooks: (paramsSearcherBook) => void
  isLoadingDetails: boolean
  bookDetails: BookDetailsValues
  props: getBooksProps
  getBookDetails: ({ id }: BooksProps) => void
  goBack: () => void
  goNext: () => void
  openDetailsBook: () => void
  isOpen: boolean
  allowScroll: () => void
  blockScroll: () => void
}

export type paramsSearcherBook = {
  title: string
  category: string
}
