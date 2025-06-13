import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

  var [name, setName] = useState('kohli')

  function test(x) {
    setName(x)
  }
  
  return (
    <div>
      <Child1 test={test} />
      <Child2 name={name} />
    </div>
  )
}

export default Parent