import React from 'react'
import Child from './Child'

function Parent() {

  var data = 100
  var name = 'sachin'

  return (
    <div>
      <h3>Parent com: {data}</h3>
      <Child x = {data} />
      <Child name = {name} />
    </div>
  )
}

export default Parent