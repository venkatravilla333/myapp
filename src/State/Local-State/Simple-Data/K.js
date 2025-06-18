import React, { useState } from 'react'
import axios from 'axios'

function K() {

  //sync data
  var [count, setCount] = useState(1)

  // async Data

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
  
console.log('render')
  return (
    <div>
    <h3>K:  state variable:  {count}</h3>
      <button onClick={updateCount}>update state variable</button>
      <br />
      <br />
      <button onClick={getData}>Get data</button>
      {
        loading ? <h3>Loading</h3> : error ? <h3>{error}</h3> :
          posts.map((obj) => {
            return <div style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
              <h5>Title: {obj.title}</h5>
              <h5>Body: {obj.body}</h5>
            </div>
          })
      }
  </div>
  )
}

export default K