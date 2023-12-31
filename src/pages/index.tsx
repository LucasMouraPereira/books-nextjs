import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      page: 'home',
      metaTitle: 'Ioasys Books | Veja as informações de seus livros favoritos',
      metaDesc: 'Veja as informações de seus livros favoritos',
      hasPagination: true
    },
    revalidate: 60 * 60 * 2
  }
}

export { default } from 'containers/Home'
