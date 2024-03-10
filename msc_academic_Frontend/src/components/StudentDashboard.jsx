import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { default as Pdf1, default as Pdf2, default as Pdf3 } from '../components/CSE_5335_FALL2023_Section3_103.pdf';

import url3 from '../components/academic-credit-hour-policy.pdf';
import url2 from '../components/approval-process-course-programs.pdf';
import url1 from '../components/course-policies-faculty.pdf';

import './style.css'; // Import your CSS file

function StudentDashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Darsh Patel',
    email: 'dp@example.com',
    birthdate: '1995-01-01',
  });

  const handleEditProfile = () => {
    setShowProfile(true);
  };

  const handleSaveProfile = () => {
    // Save the updated profile data to your backend or perform other actions.
    setShowProfile(false);
    alert('Profile saved successfully!!');
  };

  const handleCancelEdit = () => {
    setShowProfile(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleButtonAlert = (message) => {
    alert(message);
  };

  const onLinkClick = (syllabusid) => {
    if (syllabusid = 1){
      window.open(Pdf1)
    }if (syllabusid = 2){
      window.open(Pdf2)
    }if (syllabusid = 3){
      window.open(Pdf3)
    }
  }
  const onUtaClick = (urlid) => {
    if (urlid = 1){
      window.open(url1)
    }if (urlid = 2){
      window.open(url2)
    }if (urlid = 3){
      window.open(url3)
    }
  }

  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showChatbox, setShowChatbox] = useState(true);

  const handleSendChatMessage = () => {
    if (chatMessage) {
      setChatMessages([...chatMessages, `You: ${chatMessage}`]);
      simulateChatbotResponse(chatMessage); // Simulate chatbot response
      setChatMessage('');
    }
  };
  

  const simulateChatbotResponse = (userMessage) => {
    let response = 'ChatBot:';
    switch (userMessage.toLowerCase()) {
      case 'hello':
        response += 'Hi there!';
        break;
      case 'how are you?':
        response += "I'm just a chatbot, but I'm here to help. How can I assist you?";
        break;
      case 'bye':
        response += 'Goodbye!';
        break;
      case 'help':
        response += 'Sure, I can help you with your courses, profile, or answer questions.';
        break;
      // Add more questions and responses here
      case 'courses':
        response += 'You are currently enrolled in CSE 5342-002, CSE 5335-005, and CSE 6334-001.';
        break;
      default:
        response += "I'm not sure how to respond to that. Please feel free to ask any questions.";
        break;
    }
    setChatMessages([...chatMessages, response]);
  };

  const handleChatboxClose = () => {
    setShowChatbox(false);
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
            <h2>Student Dashboard</h2>
            <Link to="/studentinformation">
              <button className="button">MY PROFILE</button>
            </Link>
            <div className="section">
              <p>CSE 5342-002</p>
              <Link to="/analytics">
                <button className="button">ANALYTICS</button>
              </Link>
              &nbsp;
              <Link to="/reportstudent">
                <button className="button">REPORTS</button>
              </Link>
              &nbsp;
              <Link to="/takeassessment">
                <button className="button">TAKE AN ASSESSMENT</button>
              </Link>
              &nbsp;
              <Link to="#">
                <button className="button" onClick={() => onLinkClick(1)} target="_blank">SYLLABUS</button>
              </Link>
              &nbsp;
              <Link to="#">
                <button className="button" onClick={() => onUtaClick(1)} target="_blank">Resource</button>
              </Link>
            </div>
            <div className="section">
              <p>CSE 5335-005</p>
              <Link to="/analytics">
                <button className="button">ANALYTICS</button>
              </Link>
              &nbsp;
              <Link to="/reportstudent">
                <button className="button">REPORTS</button>
              </Link>
              &nbsp;
              <Link to="/takeassessment">
                <button className="button">TAKE AN ASSESSMENT</button>
              </Link>
              &nbsp;
              <Link to="/StudentDashboard">
                <button className="button" onClick={() => onLinkClick(2)} target="_blank">SYLLABUS</button>
              </Link>
              &nbsp;
              <Link to="/StudentDashboard">
                <button className="button" onClick={() => onUtaClick(2)} target="_blank">Resource</button>
              </Link>
            </div>
            <div className="section">
              <p>CSE 6334-001</p>
              <Link to="/analytics">
                <button className="button">ANALYTICS</button>
              </Link>
              &nbsp;
              <Link to="/reportstudent">
                <button className="button">REPORTS</button>
              </Link>
              &nbsp;
              <Link to="/takeassessment">
                <button className="button">TAKE AN ASSESSMENT</button>
              </Link>
              &nbsp;
              <Link to="/StudentDashboard">
              <button className="button" onClick={() => onLinkClick(3)} target="_blank">SYLLABUS</button>
              </Link>
              &nbsp;
              <Link to="/StudentDashboard">
                <button className="button" onClick={() => onUtaClick(3)} target="_blank">Resource</button>
              </Link>
            </div>
            {showProfile && (
              <div className="profile-section">
                <h3>Edit Profile</h3>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={profileData.birthdate}
                  onChange={handleChange}
                />
                <button className="button" onClick={handleSaveProfile}>
                  SAVE
                </button>
                &nbsp;
                <button className="button" onClick={handleCancelEdit}>
                  CANCEL
                </button>
              </div>
            )}
            {showChatbox && (
              <div className="chat-box">
                <span className="chat-box-close" onClick={handleChatboxClose}>
                  X
                </span>
                <div className="chat-messages">
                  <center><h3>Welcome to ChatBot</h3></center>
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
                <Link to="/chat" style={buttonStyle}>
                  Chat
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
