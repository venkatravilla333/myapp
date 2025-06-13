import React, { useState } from 'react'

function G() {

   
  // var [name, setName] = useState('sachin')

  // function updateStateVariable() {
  //   setName('kohli') //setter function 
  // }

  
  var x = 1 //how to store

  var updateNormalVaribale = () => {
    x++
    console.log(x)
  } //how to update

  console.log('render')
  return (
    <div>
      <h3>G: normal variable {x}</h3>
      <button onClick={updateNormalVaribale}>update normal variable</button>
      <h3>G:  state variable:  {name}</h3>
      <button onClick={updateStateVariable}>update state variable</button>
    </div>
    //how to consume (use)
  )
}

export default G