import React, { useContext } from 'react'
import { apiContext, countContext } from './A'

function K() {
  // var count = countContext._currentValue
  // console.log(count)
  
  var count = useContext(countContext) 
  var apiData = useContext(apiContext) 
  return (
    <div>
      <h3>K: {count}</h3>
      {
        apiData.loading ? <h3>Loading</h3> : apiData.error ? <h3>{apiData.error}</h3> :
          apiData.posts.map((obj) => {
            return <div style={{border:'2px solid red', padding: '10px', margin:'10px'}}>
              <h5>Title: {obj.title}</h5>
              <h5>Body: {obj.body}</h5>
            </div>
          })
      }
    </div>
   
  )
}

export default K