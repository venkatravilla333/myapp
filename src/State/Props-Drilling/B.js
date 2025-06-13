import React from 'react'
import D from './D'
import E from './E'

function B(props) {
  console.log(props)

  // var [name, setName] = useState('sachin')

  // function updateStateVariable() {
  //   setName('kohli') //setter function 
  // }

  return (
    <div>
      <D />
      <E name = {props.name} />
    </div>
  )
}

export default B