import React, { useState } from 'react';
import './style.css'; // Import your CSS file

function Exam() {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: 'What does HTML stand for?',
      options: [
        { label: 'Hyperlink Text Markup Language', isCorrect: true },
        { label: 'Hypertext Transfer Protocol', isCorrect: false },
        { label: 'Hyper Text Makeup Language', isCorrect: false },
      ],
    },
    {
      question: 'What is the primary function of a database management system (DBMS)?',
      options: [
        { label: 'Store files on a computer', isCorrect: false },
        { label: 'Manage database operations', isCorrect: true },
        { label: 'Browse the internet', isCorrect: false },
      ],
    },
    // Add more questions here
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let userScore = 0;

    questions.forEach((question, index) => {
      const selectedOption = e.target.elements[`q${index + 1}`].value;
      if (question.options.find((option) => option.label === selectedOption)?.isCorrect) {
        userScore++;
      }
    });

    setScore(userScore);
    setSubmitted(true);
  };

  return (
    <div>
      <div className="container">
        <div className="content1">
          <h1> Exam</h1>
          <p>Welcome to the final exam for the Computer Science Course.</p>
          <br></br>

          <h2>Instructions:</h2>
          <ol>
            <li>Read each question carefully.</li>
            <li>Choose the correct answer.</li>
            <li>Click the "Submit" button when you are done.</li>
          </ol>
          <br></br>
          <br></br>

          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={index}>
                <p>
                  <strong>Question {index + 1}:</strong> {question.question}
                </p>
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input type="radio" name={`q${index + 1}`} value={option.label} />
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button type="submit">Submit Exam</button>
          </form>

          {submitted && (
            <div>
              <p>Exam submitted. Your score is: {score} out of {questions.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exam;
