import React from 'react';
import './Results.css';
import { FaAngry, FaFrown, FaGrinAlt, FaHeart, FaSadTear, FaSurprise } from 'react-icons/fa';

function Results({ results }) {
  // Icon and color mapping for emotions
  const emotionConfig = {
    anger: { 
      icon: <FaAngry />, 
      color: '#E53935', 
      bgColor: '#FFEBEE',
      image: '/images/anger.png'
    },
    fear: { 
      icon: <FaFrown />, 
      color: '#8E24AA', 
      bgColor: '#F3E5F5',
      image: '/images/fear.png' 
    },
    joy: { 
      icon: <FaGrinAlt />, 
      color: '#FFA000', 
      bgColor: '#FFF8E1',
      image: '/images/joy.png'
    },
    love: { 
      icon: <FaHeart />, 
      color: '#E91E63', 
      bgColor: '#FCE4EC',
      image: '/images/love.png'
    },
    sadness: { 
      icon: <FaSadTear />, 
      color: '#1E88E5', 
      bgColor: '#E3F2FD',
      image: '/images/sadness.png'
    },
    surprise: { 
      icon: <FaSurprise />, 
      color: '#43A047', 
      bgColor: '#E8F5E9',
      image: '/images/surprise.png'
    },
    unknown: { 
      icon: null, 
      color: '#757575', 
      bgColor: '#F5F5F5',
      image: '/images/unknown.png'
    }
  };

  return (
    <div className="results-container">
      <h2>Analysis Results</h2>
      <div className="results-list">
        {results.map((result, index) => {
          const config = emotionConfig[result.emotion] || emotionConfig.unknown;
          
          return (
            <div 
              key={index} 
              className="result-card" 
              style={{ borderColor: config.color, backgroundColor: config.bgColor }}
            >
              <div className="result-content">
                <div className="tweet-text">{result.text}</div>
                <div className="emotion-result">
                  <div className="emotion-icon" style={{ color: config.color }}>
                    {config.icon}
                  </div>
                  <div className="emotion-details">
                    <h3 style={{ color: config.color }}>{result.emotion.toUpperCase()}</h3>
                    <div className="confidence-bar-container">
                      <div 
                        className="confidence-bar" 
                        style={{ 
                          width: `${result.confidence}%`,
                          backgroundColor: config.color
                        }}
                      ></div>
                      <span className="confidence-value">{result.confidence.toFixed(1)}% confidence</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;