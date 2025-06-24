import React, { useContext } from 'react'
import {apiContext} from './A'

function K() {
  var apiData = useContext(apiContext)
  console.log('render')
  return (
    <div>
      {
        apiData.loading ? <h4>Loading</h4> : apiData.error ? <h4>{apiData.error}</h4> :
          apiData.posts.map((post) => {
            return <div style={{ border: "2px solid red", margin: '10px', padding: '10px'}}>
              <h6>Title: {post.title}</h6>
              <h6>Body: {post.body}</h6>
            </div>
          })
      }
    </div>
  )
}

export default K