// import React, { useState } from 'react';
// // import 'Signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     let isValid = true;

//     if (formData.username.length < 3) {
//       tempErrors.username = "Username must be at least 3 characters long.";
//       isValid = false;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Email address is invalid.";
//       isValid = false;
//     }

//     if (formData.password.length < 6) {
//       tempErrors.password = "Password must be at least 6 characters long.";
//       isValid = false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       tempErrors.confirmPassword = "Passwords do not match.";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setSubmitted(true);
//       console.log('Form data submitted:', formData);
//     }
//   };

//   return (
//     <div className="signup-container">
//       {submitted ? (
//         <div className="success-message">Signup Successful!</div>
//       ) : (
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h2>Sign Up</h2>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className={errors.username ? 'error' : ''}
//             />
//             {errors.username && <small>{errors.username}</small>}
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={errors.email ? 'error' : ''}
//             />
//             {errors.email && <small>{errors.email}</small>}
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={errors.password ? 'error' : ''}
//             />
//             {errors.password && <small>{errors.password}</small>}
//           </div>
//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={errors.confirmPassword ? 'error' : ''}
//             />
//             {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Signup;
