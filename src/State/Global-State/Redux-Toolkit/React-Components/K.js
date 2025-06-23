import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../Toolkit/Slices/countSlice';
import { buyCake } from '../Toolkit/Slices/cakeSlice';
import { fetchPosts } from '../Toolkit/Slices/postsSlice';

function K() {
  var count = useSelector((state) => {
    return state.countReducer.count;
  });
  var cakes = useSelector((state) => {
    return state.cakeReducer.noOfCakes;
  });
  var apiData = useSelector((state) => {
    return state.postsReducer;
  });

  console.log(apiData)

  var dispatch = useDispatch();

  var getData = () => {
    dispatch(fetchPosts())
  }

  console.log('render')
  return (
    <div>
      <h4>K: Count: {count}</h4>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <h4>Cakes : {cakes}</h4>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
      <br />
      <br />
      <button onClick={getData}>get data</button>
      {apiData.loading ? (
        <h3>Loading</h3>
      ) : apiData.error ? (
        <h3>{apiData.error}</h3>
      ) : (
        apiData.posts.map((product) => {
          return (
            <div key={product.id} style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
              <h6>Title: { product.title}</h6>
              <h6>Body: { product.body}</h6>
            </div>
          );
        })
      )}
    </div>
  );
}

export default K;
