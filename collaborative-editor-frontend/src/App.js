import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Use your backend URL and port

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    socket.on('receive-changes', (newText) => {
      setText(newText);
    });

    return () => {
      socket.off('receive-changes');
    };
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit('send-changes', e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Collaborative Editor</h2>
      <textarea
        value={text}
        onChange={handleChange}
        rows="20"
        cols="80"
        style={{ fontSize: '16px' }}
      ></textarea>
    </div>
  );
}

export default App;
