import api from 'services/api'

import type { getBooksProps, BooksProps } from 'types/Books'

export const getBooks = async (props: getBooksProps) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.authorization}`
      }
    }
    const param = [
      ...[`page=${props.page}`],
      ...[`amount=${props.amount}`]
    ].join('&')
    const { data } = await api.get(`/books?${param}`, config)
    return data
  } catch (error) {
    throw String(error)
  }
}

export const getBook = async (props: getBooksProps, id: BooksProps) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.authorization}`
      }
    }
    const { data } = await api.get(`/books/${id}`, config)
    return data
  } catch (error) {
    throw String(error)
  }
}
