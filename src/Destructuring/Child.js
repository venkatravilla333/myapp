import React from 'react'

function Child(props) {
  console.log(props)

  var {name, age} = props
  return (
    // <div>Child: {props.name}, {props.age}</div>
    <div>Child: {name}, {age}</div>
  )
}

export default Child