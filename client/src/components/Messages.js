import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, idx) => (
        <div key={idx}>{message.text}</div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
