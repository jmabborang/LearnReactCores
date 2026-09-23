import { useEffect, useState } from 'react';
import LandingPage from './views/webpages/LandingPage';
import Login from './views/authentication/login';
import './App.css';

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true" />
      <span>Loading workspace</span>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 700);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  const openLogin = () => {
    setShowLogin(true);
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 700);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {showLogin ? <div className="login-view"><button className="back-home" onClick={() => setShowLogin(false)}>← Back to home</button><Login /></div> : <LandingPage onLogin={openLogin} />}
    </div>
  );
}

export default App
