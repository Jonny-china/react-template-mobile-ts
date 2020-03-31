import { ADD, MINUS } from '../constants/counter'
import { Dispatch } from 'redux'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
function p() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1000)
    }, 1000)
  })
}

// 异步的action
// export function asyncAdd() {
//   return dispatch => {
//     dispatch(add())
//   }
// }

export const asyncAdd = () => async (dispatch: Dispatch) => {
  await p()
  dispatch(add())
  return 666
}
