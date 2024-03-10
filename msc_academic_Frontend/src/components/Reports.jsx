import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './style.css';
function ReportQA() {
  // Sample data for the bar chart
  const data = [
    { category: 'No of Students', value: 50 },
    { category: 'Programs', value: 80 },
    { category: 'Grades', value: 10 },
  ];

  return (
    <div>
      <center><h3>Reports</h3></center>
      <div class="container">
      <p>
        Welcome to the Reports page. Here, you can find essential information related to our students. Below is a bar chart displaying this information:
      </p>

      <div style={{ width: '100%', height: 300}}>
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
