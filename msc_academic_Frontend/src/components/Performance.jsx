import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';
function Performance() {
  // Sample data for the bar chart
  const data = [
    { category: 'Courses', value: 100 },
    { category: 'Students', value: 500 },
    { category: 'Marks in Each Course', value: 75 },
  ];

  return (
    <div>
      <center><h3>Reports</h3></center>
      <div class="container">
      <p>
        Welcome to the Reports page. Here, you can find essential information related to our institution, including data on courses, students, and the average marks in each course. Below are bar charts displaying this information:
      </p>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div style={{ width: '30%' }}>
          <h4>Courses</h4>
          <ResponsiveContainer height={300}>
            <BarChart data={[data[0]]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '30%' }}>
          <h4>Students</h4>
          <ResponsiveContainer height={300}>
            <BarChart data={[data[1]]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '30%' }}>
          <h4>Marks in Each Course</h4>
          <ResponsiveContainer height={300}>
            <BarChart data={[data[2]]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div></div>
  );
}

export default Performance;
