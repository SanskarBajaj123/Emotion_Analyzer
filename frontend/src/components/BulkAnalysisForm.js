import React, { useState } from 'react';
import './BulkAnalysisForm.css';

function BulkAnalysisForm({ onSubmit, loading }) {
  const [tweets, setTweets] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const tweetArray = tweets.split('\n')
      .map(tweet => tweet.trim())
      .filter(tweet => tweet.length > 0);
    
    onSubmit(tweetArray);
  };

  return (
    <div className="bulk-form-container">
      <h2>Bulk Tweet Analysis</h2>
      <p>Enter multiple tweets (one per line) to analyze them in batch</p>
      <form onSubmit={handleSubmit} className="bulk-form">
        <textarea
          value={tweets}
          onChange={(e) => setTweets(e.target.value)}
          placeholder="Enter multiple tweets, one per line..."
          rows="6"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !tweets.trim()}>
          {loading ? 'Analyzing...' : 'Analyze All Tweets'}
        </button>
      </form>
    </div>
  );
}

export default BulkAnalysisForm;