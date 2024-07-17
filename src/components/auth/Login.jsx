import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup, dbf } from '../auth/firebase'; //local
import { signInWithEmailAndPassword } from 'firebase/auth'; //module
import { setDoc, doc } from "firebase/firestore";

const Login = () => {

  const navigateTo=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User:', user);

      // Example: Save login data to Firestore
      await setDoc(doc(dbf, "Users", user.uid), {
        email: user.email,
        lastLogin: new Date().toISOString()
      });

      console.log("User logged in successfully");


      // Navigate to the home page or perform other actions after successful login
      // Redirect to home page after successful registration
      navigateTo('/');

    } catch (error) {
      console.error("Error signing in:", error);
      alert(error.message); // Display a user-friendly error message
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Google user:', user);

        // Example: Save Google sign-in data to Firestore
        setDoc(doc(dbf, "Users", user.uid), {
          email: user.email,
          name: user.displayName,
          createdAt: new Date().toISOString()
        });

        console.log("User signed in with Google successfully");
        navigateTo('/');
      })
      .catch((error) => {
        console.error("Error with Google sign-in:", error);
        alert(error.message); // Display a user-friendly error message
      });
  };

  return (
    <div className="bdy">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="google-signin">
            <button onClick={handleGoogleSignIn} className="google-button">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
