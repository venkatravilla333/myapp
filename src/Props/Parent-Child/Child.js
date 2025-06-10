import React from 'react'

function Child(props) {
  // console.log(props.x = 200)
  return (
    <div>Child Com : {props.x} {props.name}</div>
  )
}

export default Child