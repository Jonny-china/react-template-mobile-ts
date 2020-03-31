import { baseRequest as fetch } from '../index'

export function getMerchantInfo() {
  return fetch<{ abc: string }>({})
}
