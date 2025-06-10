import React, { useState } from 'react'
import Child from './Child'

function Parent() {

  // var data = 10

  var [data, setData] = useState()

  // console.log(data)
  // console.log(setData)

  function test(x) {
    console.log(x)
    // data = x
    setData(x)
  }
  console.log('render')
  return (
    <div>
      <h3>{data}</h3>
      <Child test = {test} />
    </div>
  )
}

export default Parent