import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Emotion Analyzer</h1>
        <p>Analyze the emotions behind text using advanced machine learning</p>
      </div>
    </header>
  );
}

export default Header;