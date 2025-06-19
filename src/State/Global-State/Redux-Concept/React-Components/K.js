import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/Count/actionCreators'
import { buyCake } from '../Redux/Cakes/actionCreators'

function K() {

 var count = useSelector((state) => {
      return state.countReducer.count
 })
 var cakes = useSelector((state) => {
      return state.cakeReducer.noOfCakes
 })
  
  var dispatch = useDispatch()

  return (
    <div>
      <h3>K count: {count}</h3> 
      <button onClick={()=>dispatch(increaseCount())}>increase</button>
      <button onClick={()=>dispatch(decreaseCount())}>decrease</button>
      <h3>cakes : {cakes}</h3> 
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

export default K