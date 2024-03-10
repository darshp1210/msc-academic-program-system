import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';
function ReportQA() {
  // Sample data for the bar chart
  const data = [
    { category: 'Quality of Programs', value: 90 },
    { category: 'Programs', value: 20 },
    { category: 'Instructors', value: 80 },
  ];

  return (
    <div>
      <center><h3>Reports</h3></center>
      <div class="container">
      <p>
        Welcome to the Reports page. Here, you can find essential information related to the quality of our programs and the expertise of our instructors. Below is a bar chart displaying this information:
      </p>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div></div>
  );
}

export default  ReportQA;
