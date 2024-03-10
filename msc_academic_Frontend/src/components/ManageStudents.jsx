import React, { useEffect, useState } from 'react';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

function ManageStudents() {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    // Fetch the list of Students to populate the list
    fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-students.php')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <center><h1>Manage Students</h1></center>

      <AddStudent refreshStudents={() => {
        // Implement a function to refresh the Students list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-students.php')
          .then((response) => response.json())
          .then((data) => {
            setStudents(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }} />

      <EditStudent students={students} refreshStudents={() => {
        // Implement a function to refresh the Students list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-students.php')
          .then((response) => response.json())
          .then((data) => {
            setStudents(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }} />
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
    {students ? (
      students.map((student) => (
          <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.course}</td>
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

export default ManageStudents;
