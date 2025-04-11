import React, { useState } from 'react';
import './TweetForm.css';

function TweetForm({ onSubmit, loading }) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <div className="tweet-form-container">
      <h2>Enter Text</h2>
      <form onSubmit={handleSubmit} className="tweet-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste a text here to analyze its emotion..."
          rows="4"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !text.trim()}>
          {loading ? 'Analyzing...' : 'Analyze Emotion'}
        </button>
      </form>
    </div>
  );
}

export default TweetForm;