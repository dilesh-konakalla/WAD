import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Visualization from './components/Visualization';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} />
        </Routes>
      </Router>
      
 
    </div>
  );
}

export default App;
