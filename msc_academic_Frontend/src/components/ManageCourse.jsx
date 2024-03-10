import React, { useEffect, useState } from 'react';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';

function ManageCourses() {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    // Fetch the list of Courses to populate the list
    fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-courses.php')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
      <center><h1>Manage Courses</h1></center>

      <AddCourse refreshCourses={() => {
        // Implement a function to refresh the Courses list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-courses.php')
          .then((response) => response.json())
          .then((data) => {
            setCourses(data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }} />

      <EditCourse courses={courses} refreshCourses={() => {
        // Implement a function to refresh the Courses list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-courses.php')
          .then((response) => response.json())
          .then((data) => {
            setCourses(data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }} />

      {/* Render the list of Courses */}
<div className='container'>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Course</th>
    </tr>
  </thead>
  <tbody>
    {courses ? (
      courses.map((course) => (
          <tr key={course.id}>
          <td>{course.name}</td>
          <td>{course.email}</td>
          <td>{course.course}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3">No courses available</td>
      </tr>
    )}
  </tbody>
</table>
<br></br>
<br></br>
<br></br>
<br></br>

</div>

    </div>
  );
}

export default ManageCourses;
