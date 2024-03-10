import React, { useState } from 'react';

function AddInstructor({ refreshInstructors }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleAddInstructor = () => {
    if (!name || !email || !department) {
      alert('Please fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/add-instructor.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&email=${email}&department=${department}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
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
      <h2>Add Instructor</h2>
      <div className="container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <label htmlFor="department">Department:</label>
      <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <br></br>
      <button onClick={handleAddInstructor}>Add Instructor</button>
    </div></div></center>
  );
}

export default AddInstructor;
