import Axios, { AxiosRequestConfig } from 'axios'

Axios.create({
  method: 'GET', //请求方法， GET 、POST ...
  headers: { 'content-type': 'application/json;charset=UTF-8' }, //请求头
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60 * 1000 //超时时间
})

Axios.interceptors.request.use(async config => {
  console.log(
    `http ${config.method || 'GET'} --> ${config.baseURL}${
      config.url
    } params: `,
    config.params,
    ' data:',
    config.data
  )
  // fly.interceptors.request.lock()
  // fly.interceptors.request.unlock()
  return config
})

Axios.interceptors.response.use(
  response => {
    console.log(
      `http <-- ${response.request.baseURL}${response.request.url} result:`,
      response.data
    )
    if (response.status === 200) {
      const res = response.data
      if (res.successful) {
        return res
      } else {
        return Promise.reject(res)
      }
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.error('error: ' + error) // for debug
    return Promise.reject(error)
  }
)

export default class Fetch {
  baseURL: string = process.env.REACT_APP_BASE_API!

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  request = <T = any>(config: AxiosRequestConfig) => {
    return Axios.request<T>({ ...config, baseURL: this.baseURL })
  }
}
