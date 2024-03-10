import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000", {
  autoConnect: true,
  transports: ["websocket"],
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const username = localStorage.getItem('username')

  useEffect(() => {
    const handleBotMessage = (msg) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: msg.text, sender: msg.sender, socketId: msg.socketId },
      ]);
    };

    socket.on('botMessage', handleBotMessage);

    return () => {
      socket.off('botMessage', handleBotMessage);
    };
  }, [socket]);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };
  const fetchGPTResponse = async (userMessage) => {
    // Implement the logic to send the user message to the GPT API
    // and receive the generated response
    // This might involve making a network request to the GPT API endpoint.
    // Ensure to handle API keys and authentication appropriately.
    // For OpenAI GPT, you would typically use your API key.
  
    // Example:
    const response = await fetch('GPT_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY', // Replace with your API key
      },
      body: JSON.stringify({ userMessage }),
    });
  
    const responseData = await response.json();
    return responseData.gptResponse; // Adjust the property name based on the actual API response structure
  };
  

  const handleSendMessage = async () => {
    if (messageInput.trim() !== "") {
      console.log("Sending message to server:", messageInput);

      // setMessages((prevMessages) => [...prevMessages, { text: messageInput, sender: username }]);

      // const gptResponse = await fetchGPTResponse(messageInput);

      // setMessages((prevMessages) => [...prevMessages, { text: gptResponse, sender: 'Bot' }]);
      // socket.emit("message", {
      //   text: messageInput,
      //   sender: "User", // Replace with actual user information if available
      //   timestamp: new Date().toLocaleTimeString(),
      // });
      socket.emit("userMessage", { text: messageInput, sender: username });
      console.log("Message sent:", messageInput);

      setMessageInput("");
    }
  };
  return (
    <div>
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
            <div style={{ height: '600px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', backgroundColor: '#FFFFFF'  }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: msg.sender === username ? 'right' : 'left' }}>
            <strong>{msg.sender === username ? username : username === 'harshinstruct' ? 'harsh' : 'harshinstruct'}:</strong> {msg.text}

            {/* <strong>{msg.sender === username ? username : ''}:</strong> {msg.text} */}
          </div>
        ))}
      </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type='text'
          value={messageInput}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
