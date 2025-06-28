COMPANY : CODTECH IT SOLUTIONS

NAME : Nivas Mallella

Intern ID :CT08DF892

DOMAIN : Full Stack Web Development

DURATION: 8WEEKS

MENTOR: NEELA SANTOSH

DESCRIPTION : The Collaborative Document Editor is a real-time web application that allows multiple users to create and edit text documents together. 
It functions like a simplified version of Google Docs, enabling real-time synchronization across users through WebSocket technology.
🔧 Key Features
Real-Time Editing: Users can collaboratively edit documents live, with changes reflected instantly for everyone.
Rich Text Editor: Powered by React-Quill for formatting text (bold, italic, headers, etc.).
Live Sync with Socket.IO: Ensures all user inputs are broadcast across clients without page refresh.
MongoDB Integration: Automatically saves and loads documents using MongoDB with Mongoose.
Unique Document IDs: Every document has a unique URL ID, making it easy to share.
🛠 Tech Stack
Frontend: React.js, React-Quill
Backend: Node.js, Express.js
Real-Time: Socket.IO
Database: MongoDB (via Mongoose)
Tools: VS Code, Git, npm

FOLDER STRUCTURE
collab-doc-editor/
├── backend/                # Node.js + Express API
│   ├── server.js           # Main backend server
│   └── Document.js         # MongoDB schema
├── collaborative-editor-frontend/
│   └── src/
│       ├── App.js          # React app entry
│       ├── Editor.js       # Editor component
│       └── styles          # CSS styling

🔄 How It Works
When a user opens a document (with a unique ID), the backend fetches its content from MongoDB.
The editor is displayed using React-Quill.
As the user types, Socket.IO broadcasts the changes to all connected users.
Content is automatically saved back to MongoDB every few seconds.
📍 Purpose
This project was created as part of an internship at CodTech to showcase skills in full-stack development, WebSocket integration, and real-time collaboration tools. It demonstrates how frontend, backend, and database layers work together in a live system.
🌱 Future Enhancements
Add user authentication
Document access controls (public/private)
UI/UX improvements and themes
