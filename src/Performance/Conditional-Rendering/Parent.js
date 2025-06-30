import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
  var [login, setLogin] = useState(true)
  
  // if else
  
  // if (login) {
  //   return <Profile setLogin={setLogin} />
  // } else {
  //   return <Login setLogin={setLogin} />
  // }

  //element variable
  
  // var element 

  //  if (login) {
  //   element = <Profile setLogin={setLogin} />
  // } else {
  //   element = <Login setLogin={setLogin} />
  // }

  // return element
  
  //ternary operator
  
  // return login ? <Profile setLogin={setLogin} /> : <Login setLogin={setLogin} />
  
  //short circuit
  
  return login && <Profile setLogin={setLogin} />

}

export default Parent