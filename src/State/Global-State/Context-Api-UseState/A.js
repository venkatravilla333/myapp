import React, { useState } from 'react'
import axios from 'axios'
import B from './B'
import C from './C'

export var countContext = React.createContext()
export var apiContext = React.createContext()

console.log(countContext._currentValue)

function A() {

  var [count, setCount] = useState(1)

  var [loading, setLoading] = useState(false)
  var [posts, setPosts] = useState([])
  var [error, setError] = useState(null)

  var getData = () => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        setLoading(false)
        setPosts(res.data)
      }).catch((err) => {
        setLoading(false)
        setError(err.message)
    })
  }

  
  var updateCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={updateCount}>update count</button>
      <button onClick={getData}>get data</button>
      <apiContext.Provider value={{ loading, posts, error }}>
      <countContext.Provider value={count}>
      <B />
      <C />
      </countContext.Provider>
      </apiContext.Provider>
    </div>
  )
}

export default A