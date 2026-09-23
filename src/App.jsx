import { useState } from 'react';
import LandingPage from './views/webpages/LandingPage';
import Login from './views/authentication/login';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      {showLogin ? <div className="login-view"><button className="back-home" onClick={() => setShowLogin(false)}>← Back to home</button><Login /></div> : <LandingPage onLogin={() => setShowLogin(true)} />}
    </div>
  );
}

export default App
