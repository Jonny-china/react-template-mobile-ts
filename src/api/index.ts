import Fetch from '../utils/fetch'

const baseFetch = new Fetch(process.env.REACT_APP_BASE_API!)
export const baseRequest = baseFetch.request
