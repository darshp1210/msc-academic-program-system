import React from 'react';
import image1 from './image1.png';
function Home() {
  return (
    <div>
      

      <div className="container">
        <div className="content">
          <div className="text">
            <p>The Academic Program Performance System is designed to streamline program management, assessment, communication, and reporting within a computer science academic program. The ERD and cardinality notations offer a structured view of how data is organized and related within the system, aiding in its development and implementation.</p>
          </div>
          <img src={image1} alt="Placeholder Image" />

          <div className="text">
            <p>This system holds the potential to enhance the efficiency and effectiveness of academic program management, benefiting students, instructors, administrators, program coordinators, and quality assurance officers.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
