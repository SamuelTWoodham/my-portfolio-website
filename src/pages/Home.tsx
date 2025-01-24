import React from 'react';
import Navbar from '../components/Nav';
import HeroSection from '../components/HeroSection'; 

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection /> 
      {/* ... other sections */}
    </div>
  );
};

export default Home;