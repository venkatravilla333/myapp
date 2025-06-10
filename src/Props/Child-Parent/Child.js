import React from 'react'

function Child(props) {
  console.log(props)
  return (
    <div>
      <button onClick={()=>props.test(100)}>Child Button</button>
    </div>
  )
}

export default Child