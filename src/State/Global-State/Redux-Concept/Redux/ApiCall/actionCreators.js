import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionTypes"

import axios from 'axios'


var fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
var fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
}
var fetchPostsFailure = (err) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err
  }
}


export var fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        dispatch(fetchPostsSuccess(res.data))
      }).catch((err) => {
        dispatch(fetchPostsFailure(err.message))
      })
  }
}

