import React, { useState } from 'react';

function Editqa({ qas, refreshqas }) {
  const [selectedqa, setSelectedqa] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qa, setqa] = useState('');

  const handleEditqa = () => {
    if (!selectedqa || !name || !email || !qa) {
      alert('Please select a qa and fill out all fields.');
      return;
    }
    fetch('https://dxp2913.uta.cloud/darsh-php/edit-qa.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `id=${selectedqa}&name=${name}&email=${email}&qa=${qa}`,
    })
      .then((response) => response.json())
      .then((data) => {
        // alert(data.message);
        if (data.success) {
          setSelectedqa('');
          setName('');
          setEmail('');
          setqa('');
          refreshqas();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <center><div>
      <h2>Edit qa</h2>
      <div className="container">
      {qas && qas.length > 0 ? (
        <div>
          <label htmlFor="qa">Select qa:</label>
          <select id="qa" value={selectedqa} onChange={(e) => setSelectedqa(e.target.value)}>
            <option value="">Select a qa</option>
            {qas.map((qa) => (
              <option key={qa.id} value={qa.id}>
                {qa.name}
              </option>
            ))
            }
          </select>
          <br></br>
          <label htmlFor="editName">New Name:</label>
          <input type="text" id="editName" value={name} onChange={(e) => setName(e.target.value)} />
          <br></br>
          <label htmlFor="editEmail">New Email:</label>
          <input type="email" id="editEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label htmlFor="editqa">New qa title:</label>
          <input type="text" id="editqa" value={qa} onChange={(e) => setqa(e.target.value)} />
          <br></br>
          <button onClick={handleEditqa}>Edit qa</button>
        </div>
      ) : (
        <p>No qas available for editing {qas}.</p>
      )}
    </div></div></center>
  );
}

export default Editqa;