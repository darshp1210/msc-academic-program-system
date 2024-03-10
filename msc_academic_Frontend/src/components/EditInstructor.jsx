import React, { useState } from 'react';

function EditInstructor({ instructors, refreshInstructors }) {
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleEditInstructor = () => {
    if (!selectedInstructor || !name || !email || !department) {
      alert('Please select an instructor and fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/edit-instructor.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `instructorId=${selectedInstructor}&name=${name}&email=${email}&department=${department}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          setSelectedInstructor('');
          setName('');
          setEmail('');
          setDepartment('');
          refreshInstructors();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <center><div>
      <h2>Edit Instructor</h2>
      <div className="container">
      <label htmlFor="instructor">Select Instructor:</label>
      <select id="instructor" value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>
        <option value="">Select an instructor</option>
        {instructors.map((instructor) => (
          <option key={instructor.id} value={instructor.id}>
            {instructor.name}
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
      <label htmlFor="editDepartment">New Department:</label>
      <input type="text" id="editDepartment" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <br></br>
      <button onClick={handleEditInstructor}>Edit Instructor</button>
      </div></div></center>
  );
}

export default EditInstructor;
