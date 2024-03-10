import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './style.css';

function QAOfficerDashboard() {
  const [chatMessage, setChatMessage] = useState(''); // State for the chat message
  const [chatMessages, setChatMessages] = useState([]); // State for storing chat messages
  const [showChatbox, setShowChatbox] = useState(true); // State to control chatbox visibility

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  // Function to handle sending a chat message
  const handleSendChatMessage = () => {
    if (chatMessage) {
      setChatMessages([...chatMessages, `You: ${chatMessage}`]);
      simulateChatbotResponse(chatMessage); // Simulate chatbot response
      setChatMessage(''); // Clear the input field
    }
  };

  // Function to simulate a chatbot response
  const simulateChatbotResponse = (userMessage) => {
    let response = 'Chatbot: ';

    switch (userMessage.toLowerCase()) {
      case 'hello':
        response += 'Hi there!';
        break;
      case 'how are you?':
        response += "I'm just a chatbot, but I'm doing well. How can I assist you today?";
        break;
      case 'bye':
        response += 'Goodbye!';
        setChatMessages([]); // Clear chat history when the user says "bye"
        break;
      case 'tell me about reports':
        response +=
          'Reports provide insights into program performance, assessment results, and more. How can I assist you with reports?';
        break;
      case 'student support':
        response +=
          'Student support is crucial. You can help students with academic advising, resources, and counseling. How can I assist you with student support?';
        break;
      // Add more questions and responses here
      case 'what are quality standards?':
        response +=
          'Quality standards ensure that educational programs meet specific criteria for excellence. How can I assist you with quality standards?';
        break;
      default:
        response += "I didn't quite get that. Please ask another question or provide more details.";
        break;
    }

    setTimeout(() => {
      setChatMessages([...chatMessages, response]);
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };

  // Function to handle the chatbox close button click
  const handleChatboxClose = () => {
    setShowChatbox(false);
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="dashboard">
            <h2>QA Officer Dashboard</h2>
            <div className="section">
              <Link to="/reportspage" style={buttonStyle}>
                Reports
              </Link>
              <Link to="/program-review" style={buttonStyle}>
                Program Review
              </Link>
              <Link to="/student-support" style={buttonStyle}>
                Student Support
              </Link>
              <Link to="/feedback" style={buttonStyle}>
                Feedback
              </Link>
              <Link to="/tools-for-assessment" style={buttonStyle}>
                Tools for Assessment
              </Link>
              <Link to="/improvement" style={buttonStyle}>
                Improvement
              </Link>
              <Link to="/faculty-development" style={buttonStyle}>
                Faculty Development
              </Link>
              <Link to="/quality-standards" style={buttonStyle}>
                Quality Standards
              </Link>
            </div>
            {showChatbox && (
              <div className="chat-box">
                <center>
                  <h3>Welcome to ChatBox</h3>
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

export default QAOfficerDashboard;