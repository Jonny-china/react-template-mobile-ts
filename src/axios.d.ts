/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

export interface IResponse<T> {
  code: number
  data: T
  message: string
  successful: boolean
}

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<IResponse<T>> {}
}
