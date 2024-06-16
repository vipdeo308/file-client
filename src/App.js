import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [files, setFiles] = useState([]);

  // Function to create a text file with the current timestamp
  const createFile = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:3000/api/create-file');
      console.log('File created:', response.data);
    } catch (error) {
      console.error('Error creating file:', error);
    }
  };

  // Function to retrieve all text files in the folder
  const getFiles = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get('http://localhost:3000/api/files');
      setFiles(response.data.files);
    } catch (error) {
      console.error('Error retrieving files:', error);
    }
  };

  return (
    <div>
      <button onClick={createFile}>Create File</button>
      <button onClick={getFiles}>Get Files</button>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
