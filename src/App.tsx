import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import About from 'pages/About';
// import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div>
      {/* You can optionally render a global layout here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;