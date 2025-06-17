import React, { useContext } from 'react'
import { countContext } from './A'

function K() {
  // var count = countContext._currentValue
  // console.log(count)
  var count = useContext(countContext) 
  return (
    <div>K: {count}</div>
  )
}

export default K