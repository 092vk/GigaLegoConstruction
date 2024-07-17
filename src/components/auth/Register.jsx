import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup, dbf } from '../auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const Register = () => {
  const navigateTo=useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User:', user);

      // Save user data to Firestore
      await setDoc(doc(dbf, "Users", user.uid), {
        email: user.email,
        fullName: formData.fullName,
        username: formData.username,
        createdAt: new Date().toISOString()
      });

      console.log("User created successfully");

      // Redirect to home page after successful registration
      navigateTo('/');

    } catch (error) {
      console.error("Error creating user:", error);
      alert(error.message); // Display a user-friendly error message
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Google user:', user);

        // Save Google sign-in user data to Firestore
        setDoc(doc(dbf, "Users", user.uid), {
          email: user.email,
          fullName: user.displayName,
          username: user.displayName,
          createdAt: new Date().toISOString()
        });

        console.log("User signed in with Google successfully");

        // Redirect to home page after successful Google sign-in
        navigateTo('/');

      })
      .catch((error) => {
        console.error("Error with Google sign-in:", error);
        alert(error.message); // Display a user-friendly error message
      });
  };

  return (
    <div className="bdyr">
      <div className="register-container">
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-button">Register</button>
          </form>
          <div className="google-signin">
            <button onClick={handleGoogleSignIn} className="google-button">
            <FaGoogle  className='gSign'/>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
