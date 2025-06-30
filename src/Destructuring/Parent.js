import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [person] = useState({ name: 'sachin', age: 40 })
  // var [persons] = useState(['sachin', 'kohli', 'dhoni'])
  
  var {name, age} = person
  // var [n1, n2, n3] = persons
  return (
    <div>
      {/* <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3> */}
      {/* <h3>{persons[0]}</h3>
      <h3>{persons[1]}</h3>
      <h3>{persons[2]}</h3>
      <h3>{n1}</h3>
      <h3>{n2}</h3>
      <h3>{n3}</h3> */}
      <Child name={name} age={age} />
    </div>
  )
}

export default Parent