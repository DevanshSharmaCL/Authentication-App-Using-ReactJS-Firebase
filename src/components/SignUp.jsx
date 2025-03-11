import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css';


const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState(''); // Store success/error messages

   // Create Account Function
   const createAccount = async (e) => {
      e.preventDefault();
      setMessage(''); // Clear previous messages

      try {
         const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
         console.log("User Created:", userCredentials.user);
         setMessage(`✅ Account created successfully! Welcome, ${userCredentials.user.email}`);
      } catch (error) {
         console.error("Sign-Up Error:", error.message);
         setMessage(`❌ Error: ${error.message}`);
      }
   };

   return (
      <div>
         <form onSubmit={createAccount}>
            <h1>Create a New Account</h1>
            <input 
               type="email" 
               placeholder="Enter Your Email" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               required 
            />
            <input 
               type="password" 
               placeholder="Enter Your Password" 
               value={password} 
               onChange={(e) => setPassword(e.target.value)} 
               required 
            />
            <button type="submit">Create</button>
         </form>

         {message && <p>{message}</p>} {/* Show success or error message */}
      </div>
   );
};

export default SignUp;
