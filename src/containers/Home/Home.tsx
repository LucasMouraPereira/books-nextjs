import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import Cookies from 'js-cookie'
import Skeleton from 'react-loading-skeleton'

import Layout from 'components/Layout'
import Container from 'components/Container/Container'
import Grid from 'components/Grid/Grid'
import Card from 'components/Card'
import Pagination from 'components/Pagination'
import Modal from 'components/Modal'
import Content from './Content'

import { useBooksContext } from 'contexts/booksContext'

import type { BookContextDefaultValues, BookDetailsValues } from 'types/Books'

type HomeProps = {
  page?: string
}

const Home = ({ page }: HomeProps) => {
  const {
    books,
    isLoading,
    props,
    goBack,
    goNext,
    isOpen
  }: BookContextDefaultValues = useBooksContext()
  const router = useRouter()
  const [handlePage, setHandlePage] = useState(true)

  useEffect(() => {
    const authorization = Cookies.get('authorization')
    if (authorization === undefined) {
      setHandlePage(false)
      router.replace('/login')
    }
  }, [])

  if (!handlePage) return null

  if (books?.length && isLoading) {
    return (
      <Layout type={page}>
        <Container>
          <Grid loading={true}>
            <Skeleton count={12} width="272px" height="160px" />
          </Grid>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout type={page}>
      <Container>
        <Grid loading={false}>
          {books?.map((item: BookDetailsValues) => (
            <Card
              key={nanoid()}
              id={item?.id}
              url={item?.imageUrl}
              title={item?.title}
              authors={item?.authors}
              pageCount={item?.pageCount}
              publisher={item?.publisher}
              published={item?.published}
            />
          ))}
        </Grid>
        <Pagination
          page={props.page}
          totalPages={props.totalPages}
          goBack={goBack}
          goNext={goNext}
        />
      </Container>
      {isOpen && (
        <Modal>
          <Content />
        </Modal>
      )}
    </Layout>
  )
}

export default Home
