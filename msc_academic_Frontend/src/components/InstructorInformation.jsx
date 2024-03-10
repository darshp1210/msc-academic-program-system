import React from 'react';
import './style.css'; // Import your CSS file

function InstructorInformation() {
  return (
    <div>
      
      <div className="container">
        <div className="content">
          <h2>Instructor Profile</h2>
          <form action="#" method="POST">
            <label htmlFor="instructorName">Instructor Name:</label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              value="Danwin"
              required
            />

            <label htmlFor="instructorEmail">Email:</label>
            <input
              type="email"
              id="instructorEmail"
              name="instructorEmail"
              value="dan123@example.com"
              required
            />

            {/* Add more fields for instructor information as needed */}

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default InstructorInformation;
