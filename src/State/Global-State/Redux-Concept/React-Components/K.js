import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/Count/actionCreators'
import { buyCake } from '../Redux/Cakes/actionCreators'
import { fetchPosts } from '../Redux/ApiCall/actionCreators'

function K() {

 var count = useSelector((state) => {
      return state.countReducer.count
 })
 var cakes = useSelector((state) => {
      return state.cakeReducer.noOfCakes
 })
 var apiData = useSelector((state) => {
      return state.postsReducer
 })
  
  console.log(apiData)
  
  var dispatch = useDispatch()


  var getData = () => {
    dispatch(fetchPosts())
  }

  console.log('render')
  return (
    <div>
      <h3>K count: {count}</h3> 
      <button onClick={()=>dispatch(increaseCount())}>increase</button>
      <button onClick={()=>dispatch(decreaseCount())}>decrease</button>
      <h3>cakes : {cakes}</h3> 
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
      <br />
      <br />
      <button onClick={getData}>get data</button>
      {
        apiData.loading ? <h3>Loading</h3> : apiData.error ? <h3>{apiData.error}</h3>
          : apiData.posts.map((obj) => {
            return <div key={obj.id} style={{border: '2px solid, red', padding: '10px', margin: '10px'}}>
              <h3>Title: {obj.title}</h3>
              <h3>Body: {obj.body}</h3>
            </div>
          })
      }
    </div>
  )
}

export default K