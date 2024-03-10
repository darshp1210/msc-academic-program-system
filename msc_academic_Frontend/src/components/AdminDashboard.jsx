import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style.css'; // Import your CSS file

function AdminDashboard() {
  const [chatMessage, setChatMessage] = useState(''); // State for the chat message
  const [chatMessages, setChatMessages] = useState([]); // State for storing chat messages
  const [showChatbox, setShowChatbox] = useState(true); // State to control chatbox visibility

  // Function to handle sending a chat message
  const handleSendChatMessage = () => {
    if (chatMessage) {
      setChatMessages([...chatMessages, `You: ${chatMessage}`]);
      simulateChatbotResponse(chatMessage); // Simulate chatbot response
      setChatMessage(''); // Clear the input field
    }
  };

  // Function to handle the chatbox close button click
  const handleChatboxClose = () => {
    setShowChatbox(false); // Hide the chatbox
  };

  // Function to handle button clicks and show alerts
  const handleButtonAlert = (message) => {
    alert(message);
  };

  // Function to simulate chatbot responses based on user input
  const simulateChatbotResponse = (userMessage) => {
    let response = 'ChatBot:';
    switch (userMessage.toLowerCase()) {
      case 'hello':
        response += 'Hi there! How can I assist you today?';
        break;
      case 'how are you?':
        response += "I'm just a chatbot, but I'm here to help. How can I assist you?";
        break;
      case 'bye':
        response += 'Goodbye!';
        break;
      case 'help':
        response += 'I can provide information about different sections or answer your questions. Just ask!';
        break;
      // Add more questions and responses here
      case 'reviews':
        response += 'The Reviews section allows administrators to manage course reviews.';
        break;
      case 'manage students':
        response += 'You can manage students in the Student Section.';
        break;
      default:
        response += "I'm not sure how to respond to that. Please feel free to ask any questions.";
        break;
    }
    setChatMessages([...chatMessages, response]);
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="dashboard">
            <h2>Administrator Dashboard</h2>
            <div className="section">
              <p>Coordinator Section</p>
              <Link to="/program-review">
                <button className="button" onClick={() => handleButtonAlert('Clicked Reviews')}>
                  Reviews
                </button>
              </Link>
              &nbsp;
              <Link to="/assigned-students">
                <button className="button" onClick={() => handleButtonAlert('Clicked Assigned Students')}>
                  Assigned Students
                </button>
              </Link>
              &nbsp;
              <Link to="/manage-course">
                <button className="button" onClick={() => handleButtonAlert('Clicked Handle Course')}>
                  Handle Course
                </button>
              </Link>
            </div>
            <div className="section">
              <p>Student Section</p>
              <Link to="/manage-course">
                <button className="button" onClick={() => handleButtonAlert('Clicked Manage Course')}>
                  Manage Course
                </button>
              </Link>
              &nbsp;
              <Link to="/reports">
                <button className="button" onClick={() => handleButtonAlert('Clicked Reports')}>
                  Reports
                </button>
              </Link>
              &nbsp;
              <Link to="/instructor-performance">
                <button className="button" onClick={() => handleButtonAlert('Clicked Performance')}>
                  Performance
                </button>
              </Link>
              &nbsp;
              <Link to="/manage-students">
                <button className="button" onClick={() => handleButtonAlert('Clicked Manage Students')}>
                  Manage Students
                </button>
              </Link>
            </div>
            <div className="section">
              <p>QA Officer Section</p>
              <Link to="/manage-course">
                <button className="button" onClick={() => handleButtonAlert('Clicked Assign Course')}>
                  Assign Course
                </button>
              </Link>
              &nbsp;
              <Link to="/qa-reports">
                <button className="button" onClick={() => handleButtonAlert('Clicked Reports')}>
                  Reports
                </button>
              </Link>
              &nbsp;
              <Link to="/manage-qa-officer">
                <button className="button" onClick={() => handleButtonAlert('Clicked Manage QA Officer')}>
                  Manage QA Officer
                </button>
              </Link>
            </div>
            <div className="section">
              <p>Instructor Section</p>
              <Link to="/manage-course">
                <button className="button" onClick={() => handleButtonAlert('Clicked Manage Course')}>
                  Manage Course
                </button>
              </Link>
              &nbsp;
              <Link to="/gradepeers">
                <button className="button" onClick={() => handleButtonAlert('Clicked Manage Grades')}>
                  Manage Grades
                </button>
              </Link>
              &nbsp;
              <Link to="/instructor-performance">
                <button className="button" onClick={() => handleButtonAlert('Clicked Performance')}>
                  Performance
                </button>
              </Link>
            </div>
            {showChatbox && (
              <div className="chat-box">
                <center><h3>Welcome to ChatBox</h3></center>
                <span className="chat-box-close" onClick={handleChatboxClose}>
                  X
                </span>
                <div className="chat-messages">
                  {chatMessages.map((message, index) => (
                    <div key={index} className="chat-message">
                      {message}
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Type here..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <button className="chat-send-button" onClick={handleSendChatMessage}>
                  SEND
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
