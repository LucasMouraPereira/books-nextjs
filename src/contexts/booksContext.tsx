import { useContext, useState, useEffect, createContext } from 'react'
import Cookies from 'js-cookie'
import { getBooks, getBook } from 'services/getBooks'

import type { ChildrenProps } from 'types/Children'
import type {
  BooksProps,
  BookListValues,
  BookDetailsValues,
  BookContextDefaultValues
} from 'types/Books'

const BookListState: BookListValues = {
  data: [
    {
      authors: [],
      category: '',
      description: '',
      id: '',
      imageUrl: '',
      isbn10: '',
      isbn13: '',
      language: '',
      pageCount: 0,
      published: 0,
      publisher: '',
      title: ''
    }
  ],
  totalPages: 0
}

const bookContext: BookContextDefaultValues = {
  isLoading: true,
  books: BookListState.data,
  isLoadingDetails: true,
  bookDetails: {
    authors: [],
    category: '',
    description: '',
    id: '',
    imageUrl: '',
    isbn10: '',
    isbn13: '',
    language: '',
    pageCount: 0,
    published: 0,
    publisher: '',
    title: ''
  },
  props: {
    page: 1,
    totalPages: 0,
    amount: 12,
    authorization: ''
  },
  getBookDetails: () => ({}),
  goBack: () => ({}),
  goNext: () => ({})
}

export const BooksContext = createContext<BookContextDefaultValues>(bookContext)
export const useBooksContext = () => useContext(BooksContext)

export const BooksProvider = ({ children }: ChildrenProps) => {
  const [bookList, setBookList] = useState<BookListValues>(BookListState)
  const [bookDetails, setBookDetails] = useState<BookDetailsValues>(
    bookContext.bookDetails
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(true)
  const [changePage, setChangePage] = useState<number>(1)
  const { data, totalPages }: BookListValues = bookList
  const authorization = Cookies.get('authorization')
  const props = {
    page: changePage,
    totalPages: Math.ceil(totalPages),
    amount: 12,
    authorization
  }

  const handleListBooks = async () => {
    try {
      setIsLoading(true)

      if (props.authorization !== undefined) {
        const books = await getBooks(props)
        setBookList(books)
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(true)
      throw String(error)
    }
  }

  const getBookDetails = async (id: BooksProps) => {
    try {
      setIsLoadingDetails(true)
      if (props.authorization !== undefined) {
        const book = await getBook(props, id)
        setIsLoadingDetails(false)
        setBookDetails(book)
      }
    } catch (error) {
      setIsLoadingDetails(true)
      throw String(error)
    }
  }

  const goBack = () => {
    if (props.page > 1) {
      const currentPage = changePage - 1
      setChangePage(currentPage)
    }
  }

  const goNext = () => {
    if (props.page <= totalPages) {
      const currentPage = changePage + 1
      setChangePage(currentPage)
    }
  }

  useEffect(() => {
    handleListBooks()
  }, [props.authorization, changePage])

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        books: data,
        isLoadingDetails,
        bookDetails,
        props,
        getBookDetails,
        goBack,
        goNext
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
export default BooksContext
