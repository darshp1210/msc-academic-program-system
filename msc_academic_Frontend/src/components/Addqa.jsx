import React, { useState } from 'react';

function Addqa({ refreshqas }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qa, setqa] = useState('');

  const handleAddqa = () => {
    if (!name || !email || !qa) {
      alert('Please fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/add-qa.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&email=${email}&qa=${qa}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
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
      <h2>Add qa</h2>
      <div className="container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <label htmlFor="qa">qa title:</label>
      <input type="text" id="qa" value={qa} onChange={(e) => setqa(e.target.value)} />
      <br></br>
      <button onClick={handleAddqa}>Add qa</button>
    </div></div></center>
  );
}

export default Addqa;
