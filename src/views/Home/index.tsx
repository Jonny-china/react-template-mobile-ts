import React, { useCallback } from 'react'

import './Home.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { asyncAdd } from '../../store/actions/counter'
import { ADD, MINUS } from '../../store/constants/counter'

function Home() {
  const num = useSelector((state: any) => state.counter.num)

  const dispatch = useDispatch()
  const addCounter = useCallback(() => dispatch({ type: ADD }), [dispatch])
  const decCounter = useCallback(() => dispatch({ type: MINUS }), [dispatch])
  const asyncCounter = useCallback(async () => {
    const a = await dispatch(asyncAdd())
    console.log(666, a)
  }, [dispatch])

  return (
    <div className="index">
      <button className="add_btn" onClick={addCounter}>
        +
      </button>
      <button className="dec_btn" onClick={decCounter}>
        -
      </button>
      <button className="dec_btn" onClick={asyncCounter}>
        async
      </button>
      <button className="dec_btn">跳转页面</button>
      <div className="test-vw">
        <span>{num}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span>Hello, World</span>
      </div>
    </div>
  )
}

export default Home
