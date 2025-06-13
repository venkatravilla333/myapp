import React, {useState} from 'react'

function K(props) {
  console.log(props)
  // var [name, setName] = useState('sachin')
  
  //   function updateStateVariable() {
  //     setName('kohli') //setter function 
  //   }
  return (
    <div>
    <h3>K:  {props.name}</h3>
    {/* <button onClick={updateStateVariable}>update state variable</button> */}
  </div>
  )
}

export default K