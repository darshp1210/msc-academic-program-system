import React, { useState } from 'react';

function Course({refreshCourses}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const handleAddCourse = () => {
    if (!course) {
      alert('Please fill out all fields.');
      return;
    }
    fetch('https://dxp2913.uta.cloud/darsh-php/add-course.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${localStorage.getItem('username')}&email=${localStorage.getItem('email')}&course=${course}`,
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          if (data.success) {
            setCourse(course);
            console.log(data)
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
  };

  return (
    <div>
      <center><h2>Create Courses</h2></center>
      <div className="container">
      <label htmlFor="course">Course:</label>
      <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} />
      <br></br>
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
    </div>
  );
}

export default Course;
