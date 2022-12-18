import { useContext, useState, useEffect, createContext } from 'react'
import Cookies from 'js-cookie'
import { getBooks, getBook } from 'services/getBooks'
import { useScrollBlock } from 'hooks/useScrollBlock'

import type { ChildrenProps } from 'types/Children'
import type {
  BooksProps,
  BookListValues,
  BookDetailsValues,
  BookContextDefaultValues,
  paramsSearcherBook
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

const paramsBook: paramsSearcherBook = {
  title: '',
  category: ''
}

const bookContext: BookContextDefaultValues = {
  isLoading: true,
  books: BookListState.data,
  handleListBooks: () => ({}),
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
    authorization: '',
    params: paramsBook
  },
  getBookDetails: () => ({}),
  goBack: () => ({}),
  goNext: () => ({}),
  openDetailsBook: () => ({}),
  isOpen: false,
  allowScroll: () => ({}),
  blockScroll: () => ({})
}

export const BooksContext = createContext<BookContextDefaultValues>(bookContext)
export const useBooksContext = () => useContext(BooksContext)

export const BooksProvider = ({ children }: ChildrenProps) => {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
    authorization,
    params: paramsBook || undefined || null
  }

  const handleListBooks = async (params = paramsBook) => {
    try {
      setIsLoading(true)
      const filters = { ...props, params }
      if (props.authorization !== undefined) {
        const books = await getBooks(filters)
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

  const openDetailsBook = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    handleListBooks()
  }, [props.authorization, changePage])

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        books: data,
        handleListBooks,
        isLoadingDetails,
        bookDetails,
        props,
        getBookDetails,
        goBack,
        goNext,
        openDetailsBook,
        isOpen,
        allowScroll,
        blockScroll
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
export default BooksContext
