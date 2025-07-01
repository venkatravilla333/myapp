import React, { useRef, useState } from 'react'

function Concept() {
  var nv = 0

  var [sv, setSv] = useState(0)

  var rv = useRef(0)

  var updateNv = () => {
    nv++
    console.log(nv)
  }

  var updateSv = () => {
    setSv(sv + 1)
    console.log(sv)
    console.log('state update')
  }

  var updateRv = () => {
    rv.current++
    console.log(rv.current)
    console.log('ref update')
  }

  console.log('render')
  return (
    <div>
      <h3>Nv: {nv}</h3>
      <button onClick={updateNv}>update NV</button>
     
      <h3>Sv: {sv}</h3>
      <button onClick={updateSv}>update SV</button>

      <h3>Rv: {rv.current}</h3>
      <button onClick={updateRv}>update RV</button>
    </div>
  )
}

export default Concept