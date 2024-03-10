import React from 'react';
import './style.css'; // Import your CSS file

function About() {
  return (
    <div>
      
      <br></br>
      <center><h2>About Us</h2></center>

      <div className="container">
        <div className="content">
          <div className="text">
            <p>Our academic program in Computer Science is designed to prepare students for careers in a wide range of technology-related fields. Whether you're interested in software development, data science, cybersecurity, or artificial intelligence, our program offers a solid foundation and the flexibility to tailor your education to your specific interests.</p>
          </div>
          <div className="text">
            <p>We have defined distinct roles within the website to accommodate the needs of various users:</p>
            <ul>
              <li>Student: Primary users who access program materials, exams, and results.</li>
              <li>Instructor: Responsible for course management and assessment.</li>
              <li>Administrator: Oversees website functionality and manages accounts.</li>
              <li>Program Coordinator: Ensures program alignment with institutional goals.</li>
              <li>Quality Assurance Officer: Maintains program quality and effectiveness.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
