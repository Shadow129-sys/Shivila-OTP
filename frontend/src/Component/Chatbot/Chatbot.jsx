import React, { useState } from 'react';
import './Chatbot.css';

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, message]);
  
      // Automatically send a reply from the chatbot
      let botReply = '';
      const userMessage = message.toLowerCase().trim();
      if (userMessage === 'hi' || userMessage === 'hello') {
        botReply = 'Hello, how are you?';
      } else if (userMessage.includes('how are')) {
        botReply = 'I am fine, how can I help you?';
      } else {
        botReply = 'Thank you for sharing your feedback. Our customer support team will contact you soon.';
      }
  
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 500);
  
      setMessage('');
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <div className={`chat-container ${showChat ? 'chat-open' : ''}`}>
      {!showChat && (
        <div className="chat-icon" onClick={toggleChat}>
          <img
            src="https://uploads-ssl.webflow.com/5c99a2b7f7d06d83b8d7d285/5cb9655e16ec99109bf1780a_Ava%20Wave%20wink%20welcome%20to%20button.gif"
            alt="Chat Icon"
          />
        </div>
      )}
      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <button className="close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${index % 2 === 0 ? 'user-message' : 'bot-message'}`}
              >
                {message}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleMessageSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
