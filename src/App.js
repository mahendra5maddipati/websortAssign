import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
// import Projects from './components/Projects';
import Careers from './components/Careers';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
