import React, { useState } from 'react';

function EditStudent({ students, refreshStudents }) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleEditStudent = () => {
    if (!selectedStudent || !name || !email || !course) {
      alert('Please select a student and fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/edit-student.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `studentId=${selectedStudent}&name=${name}&email=${email}&course=${course}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          setSelectedStudent('');
          setName('');
          setEmail('');
          setCourse('');
          refreshStudents();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <center><div>
      <h2>Edit Student</h2>
      <div className="container">
      {students && students.length > 0 ? (
        <div>
          <label htmlFor="Student">Select Student:</label>
          <select id="Student" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
            <option value="">Select a Student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <br></br>
          <label htmlFor="editName">New Name:</label>
          <input type="text" id="editName" value={name} onChange={(e) => setName(e.target.value)} />
          <br></br>
          <label htmlFor="editEmail">New Email:</label>
          <input type="email" id="editEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label htmlFor="editCourse">New Course:</label>
          <input type="text" id="editCourse" value={course} onChange={(e) => setCourse(e.target.value)} />
          <br></br>
          <button onClick={handleEditStudent}>Edit Student</button>
        </div>
      ) : (
        <p>No students available for editing.</p>
      )}
    </div></div></center>
  );
}

export default EditStudent;