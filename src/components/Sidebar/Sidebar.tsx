import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import RoundButton from 'components/RoundButton'
import Searchbar from './Searchbar'

import { useBooksContext } from 'contexts/booksContext'

import type { BookContextDefaultValues, paramsSearcherBook } from 'types/Books'

import filtered from 'mocks/categories.json'

import CloseIcon from '/public/icons/ic-close.svg'
import HamIcon from '/public/icons/ic-ham.svg'

import * as S from './Sidebar.styles'

type handleChangeProps = {
  id: string
  label: string
  active: boolean
}

const Sidebar = () => {
  const { handleListBooks }: BookContextDefaultValues = useBooksContext()
  const [isOpenAside, setIsOpenAside] = useState(false)
  const [categoryList, setIsCategoryList] = useState(filtered.categories)
  const bg2 = '/image/background2.jpg'

  const requestCategoriesBooks = (categoryBook: string) => {
    const params: paramsSearcherBook = {
      title: '',
      category: categoryBook
    }
    handleListBooks(params)
  }

  const handleChange = (item: handleChangeProps) => {
    const newItem = categoryList.map(obj => {
      if (obj.id === item.id) {
        return {
          ...obj,
          active: item.active
        }
      }
      if (obj.id !== item.id && obj.active === true) {
        return {
          ...obj,
          active: false
        }
      }
      return obj
    })
    setIsCategoryList(newItem)
    requestCategoriesBooks(item.label)
  }

  return (
    <S.Aside isOpenAside={isOpenAside} bg={bg2}>
      <S.WrapperAside>
        <S.WrapperButton isOpenAside={isOpenAside}>
          <RoundButton
            onClick={() => {
              setIsOpenAside(!isOpenAside)
            }}
            rotation={false}
          >
            {!isOpenAside ? <HamIcon /> : <CloseIcon />}
          </RoundButton>
        </S.WrapperButton>
        <S.Content isOpenAside={isOpenAside}>
          {isOpenAside && (
            <S.WrapperSearch>
              <Searchbar />
            </S.WrapperSearch>
          )}
        </S.Content>
        <S.WrapperFilter isOpenAside={isOpenAside}>
          {isOpenAside && (
            <>
              <p>Filtros</p>
              <S.WrapperCheckbox>
                {categoryList &&
                  categoryList.map(item => (
                    <S.Checkbox key={nanoid()}>
                      <input
                        type="checkbox"
                        id={item.id}
                        name={item.label}
                        checked={item.active}
                        onChange={() => {
                          handleChange({ ...item, active: !item.active })
                        }}
                      />
                      <label htmlFor={item.id}>{item.label}</label>
                    </S.Checkbox>
                  ))}
              </S.WrapperCheckbox>
            </>
          )}
        </S.WrapperFilter>
      </S.WrapperAside>
    </S.Aside>
  )
}

export default Sidebar
