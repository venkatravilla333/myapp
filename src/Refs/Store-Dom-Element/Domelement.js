import React, { useEffect, useRef } from 'react'

function Domelement() {

  var inputRef = useRef()

  useEffect(() => {
    console.log('effect runs')
    inputRef.current.focus()
  }, [])

  console.log(inputRef)

  console.log('render')
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default Domelement