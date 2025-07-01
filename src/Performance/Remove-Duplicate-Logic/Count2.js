import React, { useState } from 'react'
import useCount from './useCount'

function Count2() {
  // var [count, setCount] = useState(0)
  
  // var updateCount = () => {
  //   setCount(count+1)
  // }

  var [count, updateCount] = useCount()
    
  return (
    <div>
      <h4>Count2 : {count}</h4>
      <button onMouseOver={updateCount}>update count2</button>
    </div>
  )
}

export default Count2