import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your CSS file

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'role1',
    fullName: '',
    birthdate: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/\d/.test(formData.password) ||
      !/[$&+,:;=?@#|'<>.^*()%!-]/.test(formData.password)
    ) {
      setPasswordError('Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character ($&+,:;=?@#|\'<>.^*()%!-)');
    } else {
      setPasswordError('');

      try {
        const response = await fetch('https://dxp2913.uta.cloud/darsh-php/signup.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setRegistrationStatus(data.message);
        } else {
          setRegistrationStatus('Error registering. Please try again.');
        }
      } catch (error) {
        setRegistrationStatus('An error occurred. Please try again later.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="login-form">
          <h2 className="login-heading">SIGNUP</h2>
          <div>
            <p>
              If you already have an account,{' '}
              <Link to="/login">login here</Link>
            </p>
          </div>
          <form onSubmit={handleFormSubmit} method="post">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />

            <div className="form-group">
              <label htmlFor="role">Select Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="role1">Student</option>
                <option value="role2">Admin</option>
                <option value="role3">QA Officer</option>
                <option value="role4">Instructor</option>
                <option value="role5">Program Coordinator</option>
              </select>
            </div>

            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />

            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              required
              value={formData.birthdate}
              onChange={handleInputChange}
            />

            {passwordError && <p className="error-message">{passwordError}</p>}
            {registrationStatus && (
              <p className="registration-status">{registrationStatus}</p>
            )}

            <button className="login-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
