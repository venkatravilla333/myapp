import React from 'react'

function Login(props) {
  return (
    <div>
      <form>
        <h4>Login</h4>
        <input type="text" />
        <button onClick={()=>props.setLogin(true)}>Login</button>
      </form>
    </div>
  )
}

export default Login