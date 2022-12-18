import React, { useState } from 'react'
import RoundButton from 'components/RoundButton'

import SearchIcon from '/public/icons/ic-search.svg'
import { useBooksContext } from 'contexts/booksContext'

import type { BookContextDefaultValues, paramsSearcherBook } from 'types/Books'

import * as S from './Searchbar.styles'

const Searchbar = () => {
  const { handleListBooks }: BookContextDefaultValues = useBooksContext()
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
    event.preventDefault()
  }

  const handleSubmit = () => {
    const params: paramsSearcherBook = {
      title: searchInput,
      category: ''
    }
    handleListBooks(params)
  }

  return (
    <S.WrapperForm>
      <S.Form>
        <input
          type="search"
          placeholder="Procure seu livro"
          onChange={handleChange}
          value={searchInput}
        />
        <S.WrapperButton>
          <RoundButton
            onClick={() => handleSubmit()}
            type="button"
            rotation={false}
          >
            <SearchIcon />
          </RoundButton>
        </S.WrapperButton>
      </S.Form>
    </S.WrapperForm>
  )
}

export default Searchbar
