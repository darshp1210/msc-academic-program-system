import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your CSS file

function ProgramCoordinatorDashboard() {
  const [chatMessage, setChatMessage] = useState(''); // State for the chat message
  const [chatMessages, setChatMessages] = useState([]); // State for storing chat messages
  const [showChatbox, setShowChatbox] = useState(true); // State to control chatbox visibility

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px', // Adjust the padding to control button size
    backgroundColor: '#007bff', // Change the background color as needed
    color: '#fff', // Text color
    textDecoration: 'none', // Remove underline from links
    border: 'none',
    borderRadius: '4px', // Rounded corners for a button-like appearance
    cursor: 'pointer',
    margin: '5px', // Adjust margin for spacing between buttons
    fontSize: '16px', // Adjust font size as needed
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Change the background color on hover
  };

  // Function to handle sending a chat message
  const handleSendChatMessage = () => {
    if (chatMessage) {
      // Add the user's message to the chat history
      setChatMessages([...chatMessages, `You: ${chatMessage}`]);

      // Simulate a chatbot response
      simulateChatbotResponse(chatMessage);

      // Clear the input field
      setChatMessage('');
    }
  };

  // Function to simulate a chatbot response
  const simulateChatbotResponse = (userMessage) => {
    // You can implement logic to handle different user messages here
    let response = 'Chatbot: ';

    // Check for special commands or questions
    switch (userMessage.toLowerCase()) {
      case 'hello':
        response += 'Hi there!';
        break;
      case 'how are you?':
        response += "I'm just a chatbot, but I'm doing well. How can I assist you today?";
        break;
      case 'bye':
        response += 'Goodbye!';
        // Clear the chat history when the user says "bye"
        setChatMessages([]);
        break;
      case 'tell me about reports':
        response +=
          'Reports are essential for tracking program performance and generating insights. You can access various reports, including student performance, assessment results, and more. How can I assist you with reports?';
        break;
      case 'manage instructors':
        response +=
          'Managing instructors involves assigning courses, scheduling classes, and ensuring effective teaching. What do you need assistance with regarding instructors?';
        break;
      default:
        response += "I didn't quite get that. Please ask another question or provide more details.";
        break;
    }

    // Simulate a delay before receiving the response
    setTimeout(() => {
      // Add the chatbot's response to the chat history
      setChatMessages([...chatMessages, response]);
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };

  // Function to handle the chatbox close button click
  const handleChatboxClose = () => {
    setShowChatbox(false); // Hide the chatbox
  };

  // Function to handle button clicks and show alerts
  const handleButtonAlert = (message) => {
    alert(message);
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="dashboard">
            <h2>Program Coordinator Dashboard</h2>
            <div className="section">
              <Link to="/reports" style={buttonStyle}>
                Reports
              </Link>
              <Link to="/manage-instructors" style={buttonStyle}>
                Manage Instructors
              </Link>
              <Link to="/manage-students" style={buttonStyle}>
                Manage Students
              </Link>
              <Link to="/feedback" style={buttonStyle}>
                Feedback
              </Link>
            </div>
            {showChatbox && (
              <div className="chat-box">
                <center>
                  <h3>Welcome to Chatbox</h3>
                </center>
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
                <button
                  className="chat-send-button"
                  onClick={handleSendChatMessage}
                >
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

export default ProgramCoordinatorDashboard;
