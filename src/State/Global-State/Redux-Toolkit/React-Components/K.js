import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Toolkit/Slices/countSlice'
import { buyCake } from '../Toolkit/Slices/cakeSlice'

function K() {
 var count = useSelector((state) => {
    return state.countReducer.count
 })
 var cakes = useSelector((state) => {
    return state.cakeReducer.noOfCakes
 })
  
var dispatch =  useDispatch()
  return (
    <div>
      <h4>K: Count: {count}</h4>
      <button onClick={()=>dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <h4>Cakes : {cakes}</h4>
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

export default K