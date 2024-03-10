import React, { useEffect, useState } from 'react';

function Analytics() {
  const [courseName, setCourseName] = useState('Course Name'); // Replace with actual course name
  const [studentName, setStudentName] = useState('Student Name'); // Replace with actual student name
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('email')
    const score = localStorage.getItem('avgscore')
    // Make a GET request to your PHP script
    fetch(`https://dxp2913.uta.cloud/darsh-php/retrieve-analytics.php?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setCourseName(data[0].course);
        setStudentName(data[0].email);
        console.log(data[0].course);
        const sampleData = {
              quizzesTaken: 5,
              averageQuizScore: score,
              assignmentsCompleted: 8,
              assignmentAverageScore: 92,
            };
        setPerformanceData(sampleData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="container">
      <h2>Course Analytics</h2>
      <h3>Course: {courseName}</h3>
      <h3>Student: {studentName}</h3>
      {performanceData && (
        <div>
          <h3>Performance Metrics</h3>
          <p>Quizzes Taken: {performanceData.quizzesTaken}</p>
          <p>Average Quiz Score: {performanceData.averageQuizScore}%</p>
          <p>Assignments Completed: {performanceData.assignmentsCompleted}</p>
          <p>Average Assignment Score: {performanceData.assignmentAverageScore}%</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Analytics;
