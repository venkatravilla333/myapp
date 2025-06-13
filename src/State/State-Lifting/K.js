import React, {useState} from 'react'

function K() {
  // var [name, setName] = useState('sachin')
  
  //   function updateStateVariable() {
  //     setName('kohli') //setter function 
  //   }
  return (
    <div>
    <h3>K:  state variable:  {name}</h3>
    <button onClick={updateStateVariable}>update state variable</button>
  </div>
  )
}

export default K