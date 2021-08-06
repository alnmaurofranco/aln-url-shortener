import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/api'
      : 'https://api-alnurlshortener.herokuapp.com/api',
})

export { api }
