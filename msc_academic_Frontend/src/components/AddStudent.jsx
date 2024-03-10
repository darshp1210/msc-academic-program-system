import React, { useState } from 'react';

function AddStudent({ refreshStudents }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleAddStudent = () => {
    if (!name || !email || !course) {
      alert('Please fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/add-student.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&email=${email}&course=${course}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
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
      <h2>Add Student</h2>
      <div className="container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <label htmlFor="course">Course:</label>
      <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} />
      <br></br>
      <button onClick={handleAddStudent}>Add Student</button>
    </div></div></center>
  );
}

export default AddStudent;
