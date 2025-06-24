import React, { useReducer, useState } from 'react'
import axios from 'axios'
import B from './B'
import C from './C'

export var apiContext = React.createContext()


function A() {

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
        break;
      
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    }
  }
 var [apiData, dispatch] =  useReducer(postsReducer, initialState)

  var getData = () => {
    dispatch({type: 'FETCH_POSTS_REQUEST'})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        dispatch({type: 'FETCH_POSTS_SUCCESS', payload: res.data})
      }).catch((err) => {
        dispatch({type: 'FETCH_POSTS_FAILURE', payload: err.message}) 
    })
  }

  
   return (
    <div>
      <button onClick={getData}>get data</button>
      <apiContext.Provider value={apiData}>
      <B />
      <C />
      </apiContext.Provider>
    </div>
  )
}

export default A