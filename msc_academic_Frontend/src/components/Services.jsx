import React from 'react';
import './style.css'; // Import your CSS file

function Services() {
  return (
    <div>
      
      <section className="services-section">
        <center><h2>Our Services</h2></center>
        <div className="service">
          <h3>Performance Measurement</h3>
          <p>We provide tools and assessments to measure program and student performance.</p>
        </div>
        <div className="service">
          <h3>Program Evaluation</h3>
          <p>Our system offers insights and analytics for program evaluation and improvement.</p>
        </div>
        <div className="service">
          <h3>User Accounts</h3>
          <p>We offer user authentication and account creation for students, instructors, and administrators.</p>
        </div>
        <div className="service">
          <h3>Reports and Analytics</h3>
          <p>Generate reports and visualizations for program performance and analysis.</p>
        </div>
        <div className="service">
          <h3>Feedback and Communication</h3>
          <p>Communicate with peers and instructors, and provide feedback on the program.</p>
        </div>
        <div className="service">
          <h3>Administration Panel</h3>
          <p>Administrators can manage courses, objectives, exams, and user accounts.</p>
        </div>
      </section>
      
    </div>
  );
}

export default Services;
