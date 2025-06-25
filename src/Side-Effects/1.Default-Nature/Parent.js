import React, { useEffect, useState } from 'react'

function Parent() {

 var [normalCount, setNormalCount] = useState(0)
 var [domCount, setDomCount] = useState(0)

  useEffect(() => {
    console.log('effect runs')
    // document.title = domCount
  })

  console.log('render')
  return (
    <div>
      <h3>Normal Count: {normalCount}</h3>
      <button onClick={()=>setNormalCount(normalCount+1)}>update count</button>
      <h3>Dom Count: {domCount}</h3>
      <button onClick={()=>setDomCount(domCount+1)}>dom count</button>
    </div>
  )
}

export default Parent