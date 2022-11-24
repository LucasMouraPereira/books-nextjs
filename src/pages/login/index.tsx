import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      page: 'login',
      metaTitle: 'Ioasys Books | Veja as informações de seus livros favoritos',
      metaDesc: 'Veja as informações de seus livros favoritos'
    },
    revalidate: 60 * 60 * 2
  }
}

export { default } from 'containers/Login'
