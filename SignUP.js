import React from 'react'
import "./SignUP.css"

const SignUP = () => {
  return (
    <div>
      <div className='signup-container'>
                <form  className='signup-form'>
                    <p>Create Account</p>
                    {/* {successMsg && <>
                        <div className='success-msg'>{successMsg}</div>
                    </>}
                    {errorMsg && <>
                        <div className='error-msg'>{errorMsg}</div>
                    </>} */}
                    <label>Your name</label>
                    <input type="text" placeholder="First and last name" />
                    <label>Mobile Number</label>
                    <input type="tel" placeholder="Mobile Number" />
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    {/* <label>Address</label> */}
                    {/* <textarea placeholder="Enter your address" rows={10}></textarea> */}
                    <button type='submit'>Sign up</button>
                    <div className='low-text'>
                        <span>Already have an account ?</span>
                        <a href="/">Login</a>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default SignUP
