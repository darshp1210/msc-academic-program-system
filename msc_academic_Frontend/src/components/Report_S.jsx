import React, { useState, useEffect } from 'react';

function Report_S() {
  const [courseName, setCourseName] = useState('Course Name'); // Replace with actual course name
  const [studentName, setStudentName] = useState('Student Name'); // Replace with actual student name
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Simulated data for a student report in the course
    const sampleData = {
      grades: {
        quiz1: 90,
        quiz2: 88,
        quiz3: 92,
        assignment1: 94,
        assignment2: 91,
        finalExam: 85,
      },
      attendance: {
        totalClasses: 20,
        attendedClasses: 18,
      },
      comments: 'This student is doing well in the course.',
    };

    setReportData(sampleData);
  }, []);

  return (
    <div>
      <h2>Course Report</h2>
      <h3>Course: {courseName}</h3>
      <h3>Student: {studentName}</h3>
      {reportData && (
        <div>
          <h3>Grades</h3>
          <ul>
            {Object.entries(reportData.grades).map(([assessment, score]) => (
              <li key={assessment}>
                {assessment}: {score}
              </li>
            ))}
          </ul>
          <h3>Attendance</h3>
          <p>Total Classes: {reportData.attendance.totalClasses}</p>
          <p>Attended Classes: {reportData.attendedClasses}</p>
          <h3>Comments</h3>
          <p>{reportData.comments}</p>
        </div>
      )}
    </div>
  );
}

export default Report_S;
