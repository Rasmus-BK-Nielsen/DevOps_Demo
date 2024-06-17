import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Question1 from './Pages/Question1/Question1';
import Question2 from './Pages/Question2/Question2';
import Question3 from './Pages/Question3/Question3';
import Question4 from './Pages/Question4/Question4';
import Question5 from './Pages/Question5/Question5';
import Question6 from './Pages/Question6/Question6';
import Feature1 from './Pages/Feature/Feature1';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/question1">Question 1</Link></li>
            <li><Link to="/question2">Question 2</Link></li>
            <li><Link to="/question3">Question 3</Link></li>
            <li><Link to="/question4">Question 4</Link></li>
            <li><Link to="/question5">Question 5</Link></li>
            <li><Link to="/question6">Question 6</Link></li>
            <li><Link to="/feature">Feature</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/question4" element={<Question4 />} />
          <Route path="/question5" element={<Question5 />} />
          <Route path="/question6" element={<Question6 />} />
          <Route path="/feature" element={<Feature1 />} />
        </Routes>
      </div>
    </Router>
  );
}
