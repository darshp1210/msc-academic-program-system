import React, { useEffect, useState } from 'react';
import AddInstructor from './AddInstructor';
import EditInstructor from './EditInstructor';

function ManageInstructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch the list of instructors to populate the list
    fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-instructors.php')
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <center><h1>Manage Instructors</h1></center>

      <AddInstructor refreshInstructors={() => {
        // Implement a function to refresh the instructors list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-instructors.php')
          .then((response) => response.json())
          .then((data) => {
            setInstructors(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }} />

      <EditInstructor instructors={instructors} refreshInstructors={() => {
        // Implement a function to refresh the instructors list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-instructors.php')
          .then((response) => response.json())
          .then((data) => {
            setInstructors(data);
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
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    {instructors ? (
      instructors.map((instructor) => (
          <tr key={instructor.id}>
          <td>{instructor.email}</td>
          <td>{instructor.department}</td>
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

export default ManageInstructors;
