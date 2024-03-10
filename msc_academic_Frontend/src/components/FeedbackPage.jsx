import React, { useState } from 'react';
import './style.css';

function Help() {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !query) {
      setFormMessage('Please fill in both email and query fields.');
    } else {
      setFormMessage('Submitting...');

      try {
        const response = await fetch('https://dxp2913.uta.cloud/darsh-php/feedback.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, query }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.status === 'success') {
          setFormMessage('Form submitted successfully!');
          setEmail('');
          setQuery('');
        } else {
          setFormMessage(data.message);
        }
      } catch (error) {
        setFormMessage('An error occurred: ' + error.message);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <center>
          <h2 className="help-heading">FEEDBACK PAGE</h2>
          <div className="form-box">
            <form onSubmit={handleFormSubmit}>
              {formMessage && <div className="form-message">{formMessage}</div>}

              <label htmlFor="email">EMAIL:</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="query">FEEDBACK:</label>
              <textarea
                id="query"
                name="query"
                rows="4"
                cols="50"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <button className="send-button" type="submit">SEND</button>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Help;
