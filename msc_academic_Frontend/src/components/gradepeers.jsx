import React, { useEffect, useState } from 'react';
import './style.css';
function GradePeers() {
  const [grades, setGrades] = useState({});
  const [comments, setComments] = useState({});
  const [peers, setPeers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const firstName= localStorage.getItem('username');

  const handleGradeChange = (peerId, event) => {
    const newGrades = { ...grades };
    newGrades[peerId] = parseInt(event.target.value);
    setGrades(newGrades);
  };

  const handleCommentChange = (peerId, event) => {
    const newComments = { ...comments };
    newComments[peerId] = event.target.value;
    setComments(newComments);
  };

  const handleSubmitGrades = () => {
    // Here, you can send the grades and comments to your backend for storage and further processing.
    console.log('Grades:', grades);
    console.log('Course:', selectedCourse);
    console.log('Comments:', comments);
    alert("Submitted");
    window.location.href = '/instructordashboard'

    // if (grades && selectedCourse) {
    //   setPeers('');
    //   setGrades('');
    //   setSelectedCourse('');
    // }
    // fetch('https://dxp2913.uta.cloud/darsh-php/submit-grade.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // body: `studentName=${peers}&instructorName=${firstName}&grades=${grades}&course=${selectedCourse}`,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     alert(data.message);
    //     if (data.success) {
    //       setGrades('');
    //       selectedCourse('');
    //       refreshCourses();
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('Error:', error);
    //   });
  };
  useEffect(() => {
    fetch(`https://dxp2913.uta.cloud/darsh-php/retrieve-students.php`)
      .then((response) => response.json())
      .then((data) => {
        setPeers(data);
        // console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  useEffect(() => {
    // Fetch the list of Courses to populate the list
    fetch('https://dxp2913.uta.cloud/darsh-php/retrieve-courses.php')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div>
      <center><h1>Peer Grading</h1></center>
      <div className="container">
      <p>Grade your peers' work and provide comments:</p>
      {peers.map((peer, index) => (
        <div key ={index}>
          <h3>{peer.name}</h3>
          <div>
            <label>Grade: </label>
            <select value = "grade" onChange={(event) => handleGradeChange(peer.id, event)}>
              <option value="5">5 (Excellent)</option>
              <option value="4">4 (Good)</option>
              <option value="3">3 (Average)</option>
              <option value="2">2 (Below Average)</option>
              <option value="1">1 (Poor)</option>
            </select>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="course">Select a course</option>
              {Array.isArray(courses) && courses.length > 0 ? (
                courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.course}
                </option>
              ))
              ) : (
                <option value="">No courses available</option>
              )}
            </select>
          </div>
          <div>
            <label>Comments: </label>
            <textarea
              rows="4"
              cols="50"
              onChange={(event) => handleCommentChange(peer.id, event)}
            ></textarea>
          </div>
        </div>
      ))}
      <button onClick={handleSubmitGrades}>Submit Grades</button>
      <br></br>
      <br></br>
      <br></br>

    </div></div>
  );
}

export default GradePeers;
