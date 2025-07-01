import React, { useState } from 'react'
import useCount from './useCount'

function Count1() {
  // var [count, setCount] = useState(0)
  
  // var updateCount = () => {
  //   setCount(count+1)
  // }

  var [count, updateCount] = useCount()
  
  return (
    <div>
      <h4>Count1: {count}</h4>
      <button onClick={updateCount}>update count1</button>
    </div>
  )
}

export default Count1