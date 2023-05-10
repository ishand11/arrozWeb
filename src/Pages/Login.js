import React from 'react'
import "./Login.css"


const Login = () => {

   

  return (
    <div>
        <div className='login-container'>
                <form className='login-form'>
                    <h2>Login</h2>
                    
                    {/* {successMsg && <>
                        <div className='success-msg'>{successMsg}</div>
                    </>}
                    {errorMsg && <>
                        <div className='error-msg'>{errorMsg}</div>
                    </>
                    } */}
                    <label>Email</label>
                    <input  type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input  type="password" placeholder="Enter your password" />

                    <button type='submit'>Login</button>

                    <div className='low-text'>
                        <span>Don't have an account ?</span>
                        <a href="/">SignUP</a>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login

