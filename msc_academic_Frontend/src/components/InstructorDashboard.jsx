import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function InstructorDashboard() {
  const [profile, setProfile] = useState({  
    firstName: localStorage.getItem('username'),
    email: localStorage.getItem('email')
  });
  // useEffect(() => {
  //   fetch(`https://dxp2913.uta.cloud/darsh-php/retrieve-analytics.php?email=${email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCourseName(data[0].course);
  //       setStudentName(data[0].email);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newChatMessage, setNewChatMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveChanges = () => {
    // You can add logic here to save the updated profile data to the server
    setIsEditing(false);
    alert('Profile changes saved successfully.');
  };

  const handleChatMessageChange = (e) => {
    setNewChatMessage(e.target.value);
  };

  const handleSendChatMessage = () => {
    window.location.href = '../../darsh-php/chat.php';

    if (newChatMessage.trim() !== '') {

      const userMessage = newChatMessage;
      setChatMessages((prevChat) => [...prevChat, `You: ${userMessage}`]);
      setNewChatMessage('');

      // Simulate a chatbot response
      simulateChatbotResponse(userMessage);
    }
  };

  const simulateChatbotResponse = (userMessage) => {
    let response = 'Chatbot: ';

    if (userMessage.toLowerCase() === 'bye') {
      response += 'Goodbye!';
    } else {
      switch (userMessage.toLowerCase()) {
        case 'hello':
          response += 'Hi there!';
          break;
        case 'how are you?':
          response += "I'm just a chatbot, but I'm doing well. How can I assist you today?";
          break;
        case 'course creation':
          response += 'Sure, I can help you create a course. What is the course name and details?';
          break;
        case 'create exam':
          response += 'Great! To create an exam, please provide the exam details.';
          break;
        case 'grade peers':
          response += 'To grade peers, you can go to the grading section. How can I help with grading?';
          break;
        default:
          response += "I didn't quite get that. Please ask another question or provide more details.";
          break;
      }
    }

    // Simulate a delay before receiving the response
    setTimeout(() => {
      setChatMessages((prevChat) => [...prevChat, response]);
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  };

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

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="dashboard">
            <h2>Instructor Dashboard</h2>

            <div className="profile-section">
              <h3>Profile</h3>
              {isEditing ? (
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveChanges}>Save Changes</button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>First Name:</strong> {profile.firstName}
                  </p>
                  <p>
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
              )}
            </div>
            <div className="section">
              <Link to="/course" style={buttonStyle}>
                Course Creation
              </Link>
              &nbsp;
                <a href="https://docs.google.com/forms/d/1AxibBRdYShCbD0V9yz4oVsdkWPAvXnzOWs_xS7HUXsM/edit" target="_blank" rel="" style={buttonStyle}>
                  Create Exam
                </a>
              &nbsp;
              <Link to="/gradepeers" style={buttonStyle}>
                Grade Peers
              </Link>
            </div>
            <div className="section">
              <p>Students:</p>
              <Link to="/InstructManageStu" style={buttonStyle}>
                Manage Student
              </Link>
            </div>
            {/* <div className="section">
              <p>Exams:</p>
              <Link to="/Exam" style={buttonStyle}>
                Exam 1
              </Link>
              &nbsp;
              <Link to="/Exam" style={buttonStyle}>
                Exam 2
              </Link>
              &nbsp;
              <Link to="/Exam" style={buttonStyle}>
                Exam 3
              </Link>
            </div> */}

            <div className="chat-box">
              <center>
                <h3>Welcome to ChatBox</h3>
              </center>
              
              <div className="chat-messages">
                {chatMessages.map((message, index) => (
                  <div key={index} className="chat-message">
                    {message}
                  </div>
                ))}
              </div>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Type your message..."
                  value={newChatMessage}
                  onChange={handleChatMessageChange}
                />
                <Link to="/chat" style={buttonStyle}>
                  Chat
                </Link>
                {/* <button
                  className="chat-send-button"
                  onClick={handleSendChatMessage}
                >
                  SEND
                </button> */}
                <br>
                  </br>
                  <br></br>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InstructorDashboard;
