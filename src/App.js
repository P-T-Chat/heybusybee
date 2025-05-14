import React, { useState } from 'react';
import Letter from './components.js/letter'; // or wherever your main content is

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'Bangaram') {
      setAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (!authenticated) {
    return (
      <div style={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', height: '100vh', background: '#ffe6ea' 
      }}>
        <h2>💌 Enter Password</h2>
        <input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
        />
        <button 
          onClick={handleLogin}
          style={{ padding: '8px 16px', borderRadius: '8px', background: '#ff4d6d', color: '#fff', border: 'none' }}
        >
          Unlock
        </button>
      </div>
    );
  }

  return <Letter />;
}

export default App;
