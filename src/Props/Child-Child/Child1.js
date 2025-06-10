import React from 'react'

function Child1(props) {
  return (
    <div>
      <button onClick={()=>props.test('sachin')}>Child1 button</button>
    </div>
  )
}

export default Child1