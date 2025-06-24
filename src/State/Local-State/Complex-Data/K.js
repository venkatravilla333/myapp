// import React, { useReducer} from 'react'

// function K() {

//   var initialState = {
//     count: 100
//   }

//   var countReducer = (state = initialState, action) => {

//     console.log(action.type)

//     switch (action.type) {
//       case 'increase':
//         return {
//           count: state.count + action.payload
//         }
//         break;
//       case 'decrease':
//         return {
//           count: state.count - action.payload
//         }
//         break;
//     }
//   }

//   var [state, dispatch] = useReducer(countReducer, initialState)


//   return (
//     <div>
//       <h4>K: {state.count}</h4>
//       <button onClick={()=>dispatch({type: 'increase', payload: 10})}>increase</button>
//       <button onClick={()=>dispatch({type: 'decrease', payload: 10})}>decrease</button>
//     </div>
//   )
// }

// export default K

import React, { act, useReducer, useState } from 'react'
import axios from 'axios'

function K() {

//  var [loading, setLoading] = useState(false)
//  var [posts, setPosts] = useState([])
//   var [error, setError] = useState(null)

  // var getData = () => {
  //   setLoading(true)
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       setLoading(false)
  //       setPosts(res.data)
  //      })
  //     .catch((err) => {
  //       setLoading(false)
  //       setError(err.message)
  //      })
  // }

  var initialState = {
    loading: false,
    posts: [],
    error: null
  }

  var postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          loading: true
        }
        break;
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload
        }
        break
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
        break;
      default:
        return state
    }
  }

  var [apiData, dispatch] = useReducer(postsReducer, initialState)

  var getData = () => {
    dispatch({type: 'FETCH_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        dispatch({type: 'FETCH_POSTS_SUCCESS', payload: res.data})
    })
      .catch((err) => {
        dispatch({type: 'FETCH_POSTS_FAILURE', payload: err.message})
    })
  }
  
  console.log('render')
  return (
    <div>
      <button onClick={getData}>Get data</button>
      {
        apiData.loading ? <h4>Loading</h4> : apiData.error ? <h4>{apiData.error}</h4> :
          apiData.posts.map((post) => {
            return <div style={{border: '2px solid red', margin: "10px", padding: '10px'}}>
              <h6>Title: {post.title}</h6>
              <h6>Body: {post.body}</h6>
            </div>
          })
      }
    </div>
  )
}

export default K