import React from 'react'

const signUp = () => {
  return (
     <div>
        <form>
            <h1>Create a new account</h1>
            <input type='email' placeholder='Enter Your Email'></input>
            <input type='password' placeholder='Enter Your Password'></input>
            <button>Create</button>
        </form>
     </div>
  )
}

export default signUp