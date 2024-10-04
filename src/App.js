import React from 'react';
import './App.css'; 
import Landingpage from './components/landing page/landingpage';
import Blog from './components/Blog/blog'
import Blog1 from './components/Blog1/blog1'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/privacy-policy" element={<Blog />} />
      <Route path="/terms-and-conditions" element={<Blog1 />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
