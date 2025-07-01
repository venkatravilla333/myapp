import React, { useState } from 'react'
import useCount from './useCount'

function Count3() {
  // var [count, setCount] = useState(0)
  
  // var updateCount = () => {
  //   setCount(count+1)
  // }

  var [count, updateCount] = useCount()
  
  return (
    <div>
      <h4>Count3: {count}</h4>
      <button onDoubleClick={updateCount}>update count3</button>
    </div>
  )
}

export default Count3