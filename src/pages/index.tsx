export const getStaticProps = async () => ({
  props: {
    type: 'home',
    metaTitle: 'Ioasys Books | Veja as informações de seus livros favoritos',
    metaDesc: 'Veja as informações de seus livros favoritos',
    hasPagination: true
  },
  revalidate: 60 * 60 * 2
})

export { default } from 'containers/Home'
