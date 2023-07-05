import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
    <div className='ab'>
      <div className='a'>LOGIN</div><br />
      <form id='log'>
        <label htmlFor="email">Email:</label><br />
        <input type="text"  placeholder='Enter email' id='email'/><br /><br />
        <label htmlFor="psw">Password:</label><br />
        <input type="password" placeholder='Enter password' id='psw'/><br /><br />
        <input type="checkbox" name="check" />
        <label htmlFor="show">Show password</label><br />
        <button className='button' id='button'>SIGN IN</button><br /><br /><br />
        <div className='zx'>Forgot  <a href="none"> Username / Password ?</a></div><br />
        <div className='xy'>Don't have an account? <a href="">Sign Up</a></div>
      </form>
      
    </div>
    
    </>
  )
}

export default Login