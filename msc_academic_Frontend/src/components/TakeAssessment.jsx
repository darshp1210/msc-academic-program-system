import React, { useEffect, useState } from 'react';

function TakeAssessment() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(5).fill(''));
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Sample questions related to Python, Java, and C
    const sampleQuestions = [
      {
        question: 'What is Python?',
        options: ['A programming language', 'A snake', 'A fruit'],
        correctAnswer: 'A programming language',
      },
      {
        question: 'Which of the following is not a Java keyword?',
        options: ['int', 'boolean', 'string', 'if'],
        correctAnswer: 'string',
      },
      {
        question: 'What does the acronym "C" stand for in the C programming language?',
        options: ['Common', 'Complex', 'Compact', 'No specific meaning'],
        correctAnswer: 'No specific meaning',
      },
      {
        question: 'Which programming language is often used for web development?',
        options: ['Python', 'Java', 'C', 'JavaScript'],
        correctAnswer: 'JavaScript',
      },
      {
        question: 'What is the main function used for in C and C++?',
        options: ['Printing text', 'Handling user input', 'Starting the program', 'Ending the program'],
        correctAnswer: 'Starting the program',
      },
    ];

    setQuestions(sampleQuestions);
  }, []);

  const handleAnswerChange = (index, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score++;
      }
    }

    const percentage = (score / questions.length) * 100;
    localStorage.setItem("avgscore",percentage);
    console.log(percentage)
    setScore(percentage);
  };

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
export default TakeAssessment;
