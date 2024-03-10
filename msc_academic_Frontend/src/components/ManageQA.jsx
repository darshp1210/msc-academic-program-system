import React, { useEffect, useState } from 'react';
import Addqa from './Addqa';

function Manageqa() {
  const [qa, setqa] = useState([]);


  useEffect(() => {
    // Fetch the list of qa to populate the list
    fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-qas.php')
      .then((response) => response.json())
      .then((data) => {
        setqa(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>

      <center><h1>Manage qa</h1></center>

      <Addqa refreshqa={() => {
        // Implement a function to refresh the qa list after adding or editing
        fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-qas.php')
          .then((response) => response.json())
          .then((data) => {
            setqa(data);
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
  {qa ? (
    qa.map((qa) => (
          <tr key={qa.id}>
          <td>{qa.name}</td>
          <td>{qa.email}</td>
          <td>{qa.qa}</td>
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

export default Manageqa;
