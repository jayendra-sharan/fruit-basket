import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { FruitBasket } from './components/basket';
import { Login } from './components/login';

function App() {
  const [loginData, setLoggedIn] = useState({
    isLoggedIn: false,
    user: null,
  });

  const setLoginStatus = ({status, user}) => {
    setLoggedIn({
      isLoggedIn: status,
      user
    })
  }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/login"/>
          )}/>
          <Route path="/login">
            <Login
              setLoginStatus={setLoginStatus}
              isLoggedIn={loginData.isLoggedIn} />
          </Route>
          <Route path="/home">
            <FruitBasket
              setLoginStatus={setLoginStatus}
              loginData={loginData}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
