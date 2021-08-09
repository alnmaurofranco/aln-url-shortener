import { useState } from 'react'
import { VscCheck, VscChromeRestore, VscLink } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import { api } from '@/services/api'
import { toast } from 'react-hot-toast'
import Footer from '@/components/Footer'
import { SpinnerCircularFixed } from 'spinners-react'
import Head from 'next/head'

type TCreateURLFormData = {
  url: string
}

const IndexPage = (): JSX.Element => {
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleSubmitURL = async ({ url }: TCreateURLFormData) => {
    // Reset
    setShortUrl(null)
    setLoading(true)

    if (url.trim() === '') {
      setLoading(false)
      return toast.custom(
        () => (
          <div className="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400">
                  Erro
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Preencha o campo com sua URL
                </p>
              </div>
            </div>
          </div>
        ),
        {
          duration: 950,
        },
      )
    }

    try {
      const {
        data: { shortId },
      } = await api.post('/urls', { destination: url })

      toast.custom(
        () => (
          <div className="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-green-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-green-500 dark:text-green-400">
                  Sucesso
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  URL curta criada!
                </p>
              </div>
            </div>
          </div>
        ),
        { duration: 950 },
      )

      setLoading(false)
      setShortUrl(shortId)
      reset()
    } catch (err) {
      setLoading(false)
      return toast.custom(
        () => (
          <div className="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400">
                  Erro
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Houve um erro com nosso servidor.
                </p>
              </div>
            </div>
          </div>
        ),
        {
          duration: 950,
        },
      )
    }
  }

  const copyLinkForShare = (shortUrl: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/${shortUrl}`)
    toast.custom(
      () => (
        <div className="flex overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 bg-green-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-green-500 dark:text-green-400">
                Sucesso
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                URL foi copiado
              </p>
            </div>
          </div>
        </div>
      ),
      { duration: 950 },
    )
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center flex-col">
      <Head>
        <title>⚡ ALN Projeto ⚡ | URL Shortener</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 justify-center items-center">
          <h1 className="title-font font-bold sm:text-4xl text-4xl mb-6 text-purple-600">
            ⚡ ALN PROJETO ⚡
          </h1>
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font font-bold sm:text-7xl text-4xl mb-4 text-gray-900">
              Encurtador de URL
            </h1>
            <p className="mb-8 leading-relaxed">
              Encurtador de URL é usado para criar uma url curta, para
              compartilhar em sites, chats, e-mails e redes sociais. Como o
              Facebook, Instagram, Youtube, Whatsapp.
            </p>
            <form
              onSubmit={handleSubmit(handleSubmitURL)}
              className="flex w-full justify-center items-end mb-5"
            >
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="shortUrl"
                  className="leading-7 text-sm text-gray-600"
                >
                  Encurtar URL
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  {...register('url')}
                  aria-invalid={errors.url ? 'true' : 'false'}
                  placeholder="Digite sua URL aqui..."
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex transition duration-150 ease-in-out hover:bg-purple-600 focus:outline-none bg-purple-700 rounded text-white border-0 py-4 px-9 text-lg">
                {loading === false ? (
                  <VscCheck size={26} />
                ) : (
                  <SpinnerCircularFixed
                    size={26}
                    thickness={80}
                    speed={145}
                    color="rgba(255, 255, 255, 1)"
                    secondaryColor="rgba(0, 0, 0, 0)"
                  />
                )}
              </button>
            </form>

            {shortUrl && (
              <div className="mt-7">
                <h3 className="font-bold text-center text-black">
                  🎉Parabéns!🎉 Agora seu link está curto e pronto para ser
                  compartilhado com a galera.
                </h3>

                <div className="flex items-stretch mt-2">
                  <div className="relative w-full">
                    <div className="absolute text-gray-500 flex items-center px-2 border-r h-full">
                      <VscLink size={26} />
                    </div>
                    <input
                      id="link"
                      className="pr-24 pl-12 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-16 flex items-center text-sm border-gray-300 rounded border"
                      defaultValue={`${window.location.origin}/${shortUrl}`}
                    />
                    <button
                      onClick={() => copyLinkForShare(shortUrl)}
                      className="absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-purple-600 focus:outline-none bg-purple-700 rounded-r text-white px-5 h-16 text-sm"
                    >
                      <VscChromeRestore size={26} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default IndexPage
