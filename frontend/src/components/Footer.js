import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Created by Sanskar Bajaj &copy; {new Date().getFullYear()}</p>
        <p>Emotion Analysis using Machine Learning</p>
        <div className="footer-links">
          <a href="https://github.com/SanskarBajaj123" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sanskar-bajaj8377/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;