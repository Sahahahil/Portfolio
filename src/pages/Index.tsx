
import React from 'react';
import Hero from '../components/Hero';

interface IndexProps {
  darkMode?: boolean;
}

const Index: React.FC<IndexProps> = ({ darkMode = true }) => {
  return <Hero darkMode={darkMode} />;
};

export default Index;
