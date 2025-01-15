import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
