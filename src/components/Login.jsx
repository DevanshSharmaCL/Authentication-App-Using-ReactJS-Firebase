import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [user, setUser] = useState(null);

   // Login function
   const logIn = async (e) => {
      e.preventDefault();
      try {
         const userCredentials = await signInWithEmailAndPassword(auth, email, password);
         setUser(userCredentials.user);
         console.log("Logged in:", userCredentials.user);
      } catch (error) {
         console.error("Login Error:", error.message);
         alert(error.message);
      }
   };

   // Logout function
   const logOut = async () => {
      try {
         await signOut(auth);
         setUser(null);
         console.log("User Logged Out");
      } catch (error) {
         console.error("Logout Error:", error.message);
      }
   };

   return (
      <div>
         {!user ? (
            <form onSubmit={logIn}>
               <h1>Login</h1>
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
               <button type="submit">Login</button>
            </form>
         ) : (
            <div>
               <p>Welcome, {user.email} 🎉</p>
               <button onClick={logOut}>Logout</button>
            </div>
         )}
      </div>
   );
};

export default Login;
