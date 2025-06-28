// src/components/Editor.js

import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Editor = () => {
  const [value, setValue] = useState('');
  const textareaRef = useRef();

  useEffect(() => {
    // Join a hardcoded document ID
    const docId = 'my-doc-id';
    socket.emit('get-document', docId);

    // Load initial document data
    socket.on('load-document', document => {
      setValue(document);
    });

    // Receive updates from other clients
    socket.on('receive-changes', newValue => {
      setValue(newValue);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setValue(newContent);
    socket.emit('send-changes', newContent);
    socket.emit('save-document', newContent);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Collaborative Editor</h2>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '300px',
          fontSize: '16px',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default Editor;
