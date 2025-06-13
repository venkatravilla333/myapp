import React, { useState } from 'react'

function D() {
  // var [name, setName] = useState('sachin')

  // function updateStateVariable() {
  //   setName('kohli') //setter function 
  // }
  
  return (
    <div>
      <h3>D:  state variable:  {name}</h3>
      <button onClick={updateStateVariable}>update state variable</button>
    </div>
  )
}

export default D