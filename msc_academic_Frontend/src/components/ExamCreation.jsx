import React, { useEffect, useState } from 'react';

function ExamCreation() {
  const [examName, setExamName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]);
  const handleCreateExam = ({refreshCourses}) => {
    if (examName && setCourses) {
      setExams([...exams, { course: setCourses, name: examName }]);
      setExamName('');
      setCourses('');
      setSelectedCourse('');
    }
    fetch('https://dxp2913.uta.cloud/darsh-php/create-exam.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${examName}&course=${selectedCourse}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          setExams('');
          setCourses('');
          console.log(examName)
          console.log(selectedCourse)
          refreshCourses();
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };


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
      <center><h2>Create Exams</h2>
      </center>
      <iframe
          title="Survey"
          src="https://forms.gle/cBAdPS7MttKagiXE8"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ width: "100%", height: "1533px" }}
        ></iframe>
    </div>
  );
}

export default ExamCreation;
