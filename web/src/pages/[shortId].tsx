import { api } from '@/services/api'
import { GetServerSideProps } from 'next'

const RedirectDestination = (): JSX.Element => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { shortId } = ctx.query

    const { data } = await api.get(`urls/${shortId}`)

    return {
      redirect: {
        destination: data,
        permanent: false,
      },
    }
  } catch (err) {
    return {
      props: { err },
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default RedirectDestination
