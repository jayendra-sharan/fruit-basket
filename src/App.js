import React, { useState } from 'react';
import './App.css';
import { Login } from './components/login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      {
        isLoggedIn
        ? <div>User Logged In.</div>
        : <Login setLoginStatus={(loginStatus) => {
          setLoggedIn(loginStatus);
        }}/>
      }
    </div>
  );
}

export default App;
