import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './style.css';
function ReportsPage() {
  // Sample data for the pie chart
  const data = [
    { name: 'Instructors', value: 300 },
    { name: 'Students', value: 500 },
    { name: 'Program Coordinators', value: 100 },
    { name: 'Courses', value: 200 },
    { name: 'Attendance', value: 200 },
  ];

  // Custom colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div>
      <center><h3>Reports</h3></center>
      <div class="container">
      <p>
        Welcome to the Reports page. Here, you can find important information related to our institution, including data on instructors, students, program coordinators, courses, and attendance. Below is a pie chart illustrating the distribution of these categories:
      </p>
      

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ResponsiveContainer width="90%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div></div>
  );
}

export default ReportsPage;
