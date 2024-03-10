import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';
function ReportStudent() {
  // Sample data for the bar chart
  const data = [
    { category: 'Students', value: 500 },
    { category: 'Courses', value: 100 },
    { category: 'Attendance', value: 200 },
    { category: 'Graded Assignments', value: 50 },
  ];

  return (
    <div>
     <center><h3>Reports</h3></center> 
     <div class="container">
      <p>
        Welcome to the Reports page. Here, you can find important information related to our institution, including data on students, courses, attendance, and graded assignments. Below is a bar chart displaying this information:
      </p>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div></div>
  );
}

export default ReportStudent;
