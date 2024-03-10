import React, { useState } from 'react';

function EditCourse({ courses, refreshCourses }) {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const handleEditCourse = () => {
    if (!selectedCourse || !name || !email || !course) {
      alert('Please select a course and fill out all fields.');
      return;
    }

    fetch('https://dxp2913.uta.cloud/darsh-php/edit-course.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `courseId=${selectedCourse}&name=${name}&email=${email}&course=${course}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          setSelectedCourse('');
          setName('');
          setEmail('');
          setCourse('');
          refreshCourses();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <center><div>
      <h2>Edit Course</h2>
      <div className="container">
      {courses && courses.length > 0 ? (
        <div>
          <label htmlFor="Course">Select Course:</label>
          <select id="Course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select a Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.course}
              </option>
            ))}
          </select>
          <br></br>
          <label htmlFor="editName">New Name:</label>
          <input type="text" id="editName" value={name} onChange={(e) => setName(e.target.value)} />
          <br></br>
          <label htmlFor="editEmail">New Email:</label>
          <input type="email" id="editEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br/>
          <label htmlFor="editCourse">New Course:</label>
          <input type="text" id="editCourse" value={course} onChange={(e) => setCourse(e.target.value)} />
          <br></br>
          <button onClick={handleEditCourse}>Edit Course</button>
        </div>
      ) : (
        <p>No courses available for editing.</p>
      )}
    </div></div></center>
  );
}

export default EditCourse;