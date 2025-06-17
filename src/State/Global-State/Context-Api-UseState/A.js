import React, { useState } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext()

console.log(countContext._currentValue)

function A() {

  var [count, setCount] = useState(1)
  
  var updateCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={updateCount}>update count</button>
      <countContext.Provider value={count}>
      <B />
      <C />
      </countContext.Provider>
    </div>
  )
}

export default A