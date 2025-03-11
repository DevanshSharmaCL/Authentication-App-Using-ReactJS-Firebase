import React, { useState } from 'react';
import './AuthPage.css';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp & Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null); // Store logged-in user info

    // Handle Sign Up
    const handleSignUp = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredentials.user);
            setMessage(`✅ Account created successfully! Welcome, ${userCredentials.user.email}`);
            setIsSignUp(false); // Switch to login after successful sign-up
        } catch (error) {
            setMessage(`❌ Error: ${error.message}`);
        }
    };

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredentials.user);
            setMessage(`✅ Logged in successfully! Welcome back, ${userCredentials.user.email}`);
        } catch (error) {
            setMessage(`❌ Error: ${error.message}`);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
        setMessage('You have been logged out.');
    };

    return (
        <div>
            {/* Show SignUp if user is not logged in and isSignUp is true */}
            {!user && isSignUp && (
                <form onSubmit={handleSignUp}>
                    <h1>Sign Up</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Create Account</button>
                    <p>Already have an account? <button type="button" onClick={() => setIsSignUp(false)}>Login</button></p>
                </form>
            )}

            {/* Show Login if user is not logged in and isSignUp is false */}
            {!user && !isSignUp && (
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                    <p>Don't have an account? <button type="button" onClick={() => setIsSignUp(true)}>Sign Up</button></p>
                </form>
            )}

            {/* Show Logout if user is logged in */}
            {user && (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            {message && <p>{message}</p>}
        </div>
    );
};

export default AuthPage;
