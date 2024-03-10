import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in both username and password fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://dxp2913.uta.cloud/darsh-php/login.php', { // Use relative URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("username", data.user.username)


      if (data.status === 0) {
        // Redirect to a page based on the user's role
        switch (data.user.role) {
          case 'role1':
            history.push('/StudentDashboard');
            break;
          case 'role2':
            history.push('/AdminDashboard');
            break;
          case 'role3':
            history.push('/QaOfficerDashboard');
            break;
          case 'role4':
            history.push('/InstructorDashboard');
            break;
          case 'role5':
            history.push('/ProgramCoordinatorDashboard');
            break;
          default:
            history.push('/login');
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="login-form">
            <h2 className="login-heading">LOGIN</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="forgot-password-link">
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </p>

              <button className="login-button" type="submit" disabled={loading}>
                {loading ? 'Logging In...' : 'LOGIN'}
              </button>
            </form>
          </div>
          <div>
            <p>If you don't have an account, sign up here</p>
            <Link to="/Signup">
              <button className="signup-button">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
