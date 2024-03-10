import React, { useState } from 'react';
import './style.css'; // Import your CSS file

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your registered email address.');
    } else {
      // You can replace this alert with your actual logic to send a password reset link.
      alert('A password reset link has been sent to your email address.');
    }
    console.log(email);
    fetch('https://dxp2913.uta.cloud/darsh-php/forgot-password.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          setEmail('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="login-form">
            <h2>FORGOT PASSWORD</h2>
            <p>Enter your registered email address, and we'll send you a password reset link.</p>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Send Reset Link</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
