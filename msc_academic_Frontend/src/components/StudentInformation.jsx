import { React, useEffect, useState } from 'react';
import './style.css'; // Import your CSS file

function StudentInformation() {
  const [sName, setStudentName] = useState('Student Name'); // Replace with actual student name
  const [studentEmail, setStudentEmail] = useState('Student Email'); // Replace with actual course name

  useEffect(() => {
    const email = localStorage.getItem('email')
    // console.log(email)
    // Make a GET request to your PHP script
    fetch(`https://dxp2913.uta.cloud/darsh-php/get-edit-student.php?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setStudentEmail(data[0].email);
        setStudentName(data[0].name);
      })
      .catch((error) => {
        console.log(email);
        console.log('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      
      <div className="container">
        <div className="content">
          <h2>Student Profile</h2>
          <form action="#" method="POST">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={sName}
              required
            />

            <label htmlFor="studentEmail">Email:</label>
            <input
              type="email"
              id="studentEmail"
              name="studentEmail"
              value={studentEmail}
              required
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentInformation;
