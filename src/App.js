import React from 'react';
import Header from './components/Header/Header.js';
import Resumes from './components/Resumes/Resumes.js';

import './App.scss';

import resumePDF from './assets/resume.pdf';

function App() {
  return (
    <div className="App">
      <Header />
      <Resumes />
    </div>
  );
}

export default App;
