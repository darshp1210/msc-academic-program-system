import React from 'react';
import './style.css'; // Import your CSS file

function InstructorAdmin() {
  return (
    <div>
      

      <div className="container">
        <div className="content">
          <h2>Instructors Information</h2>
          <div className="section">
            <h3>Instructor 1</h3>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Office Hours: Monday and Wednesday, 10:00 AM - 12:00 PM</p>
          </div>
          <div className="section">
            <h3>Instructor 2</h3>
            <p>Name: Jane Smith</p>
            <p>Email: jane.smith@example.com</p>
            <p>Phone: +1 (987) 654-3210</p>
            <p>Office Hours: Tuesday and Thursday, 2:00 PM - 4:00 PM</p>
          </div>
          <div className="section">
            <h3>Instructor 3</h3>
            <p>Name: Michael Johnson</p>
            <p>Email: michael.johnson@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Office Hours: Wednesday and Friday, 1:00 PM - 3:00 PM</p>
          </div>
          <div className="section">
            <h3>Instructor 4</h3>
            <p>Name: Sarah Williams</p>
            <p>Email: sarah.williams@example.com</p>
            <p>Phone: +1 (777) 888-9999</p>
            <p>Office Hours: Monday and Thursday, 3:00 PM - 5:00 PM</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default InstructorAdmin;
