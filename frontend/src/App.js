import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TweetForm from './components/TweetForm';
import Results from './components/Results';
import BulkAnalysisForm from './components/BulkAnalysisForm';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('single');
  const [apiConnected, setApiConnected] = useState(false);

  useEffect(() => {
    checkApiStatus();
  }, []);

  const checkApiStatus = async () => {
    console.log('Checking API status...');
    try {
      const response = await fetch('https://emotion-analyzer-sr1i.onrender.com/api/health');
      if (response.ok) {
        console.log('API is connected');
        setApiConnected(true);
      } else {
        console.warn('API responded but not OK');
      }
    } catch (error) {
      console.error('API connection error:', error);
      setApiConnected(false);
      toast.error('Cannot connect to the backend server. Please make sure it is running.');
    }
  };

  const analyzeTweet = async (text) => {
    if (!text.trim()) {
      toast.warn('Please enter some text to analyze');
      return;
    }

    console.log('Starting single tweet analysis...');
    setLoading(true);
    try {
      console.log('Sending POST request to /api/predict');
      const response = await fetch('https://emotion-analyzer-sr1i.onrender.com/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        console.error('Server responded with error status');
        throw new Error('Server error');
      }

      const data = await response.json();
      console.log('Received response:', data);
      setResults([data]);
      toast.success('Analysis complete!');
    } catch (error) {
      console.error('Error during single tweet analysis:', error);
      toast.error('Failed to analyze the text. Please try again.');
    } finally {
      console.log('Single tweet analysis complete.');
      setLoading(false);
    }
  };

  const analyzeBulk = async (tweets) => {
    if (!tweets || tweets.length === 0) {
      toast.warn('Please provide tweets to analyze');
      return;
    }

    console.log(`Starting bulk analysis of ${tweets.length} tweets...`);
    setLoading(true);
    try {
      console.log('Sending bulk POST request to /api/predict');
      const response = await fetch('https://emotion-analyzer-sr1i.onrender.com/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: tweets }),
      });

      if (!response.ok) {
        console.error('Server responded with error status');
        throw new Error('Server error');
      }

      const data = await response.json();
      console.log('Received bulk response:', data);
      setResults(data.results);
      toast.success(`Successfully analyzed ${data.results.length} tweets!`);
    } catch (error) {
      console.error('Error during bulk tweet analysis:', error);
      toast.error('Failed to analyze tweets. Please try again.');
    } finally {
      console.log('Bulk tweet analysis complete.');
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <div className="container">
        <div className="api-status">
          API Status:
          <span className={apiConnected ? "status-connected" : "status-disconnected"}>
            {apiConnected ? " Connected" : " Disconnected"}
          </span>
          {!apiConnected && (
            <button className="retry-button" onClick={checkApiStatus}>
              Retry
            </button>
          )}
        </div>

        <div className="tabs">
          <button
            className={activeTab === 'single' ? 'active' : ''}
            onClick={() => setActiveTab('single')}
          >
            Single Tweet Analysis
          </button>
          <button
            className={activeTab === 'bulk' ? 'active' : ''}
            onClick={() => setActiveTab('bulk')}
          >
            Bulk Analysis
          </button>
        </div>

        {activeTab === 'single' ? (
          <TweetForm onSubmit={analyzeTweet} loading={loading} />
        ) : (
          <BulkAnalysisForm onSubmit={analyzeBulk} loading={loading} />
        )}

        {results.length > 0 && <Results results={results} />}
      </div>

      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
