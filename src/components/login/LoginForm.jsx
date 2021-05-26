import React, { useState } from 'react';
import { Card, Input } from 'antd';
import { performLogin } from '../../util';
import { useHistory } from 'react-router';

export default function LoginForm({
  setLoginStatus
}) {
  const history = useHistory();
  const [loginState, updateLoginState] = useState({
    username: '',
    password: '',
    errorMessage: '',
    isLoading: false,
  })

  /**
   * Performs partial state update
   * @param {Object} props 
   */
  const updateState = (props) => {
    updateLoginState({
      ...loginState,
      ...props
    })
  }

  /**
   * On change event handler
   * @param {Event} e 
   */
  const handleChange = (e) => {
    updateState({
      [e.target.id]: e.target.value
    })
  }

  /**
   * Submit button click handler
   */
  const handleClick = (e) => {
    updateState({
      isLoading: true
    });
    const { username, password } = loginState;
    performLogin({
      username,
      password
    }).then (response => {
      updateState({
        isLoading: false,
        username: '',
        password: '',
        errorMessage: '',
      })
      if (response) {
        setLoginStatus({
          status: true,
          user: response
        })
        history.push('/home')
      }
    }).catch (error => {
      updateState({
        isLoading: false,
        errorMessage: error.message,
        username: '',
        password: ''
      })
    })
  }

  const { username, password, errorMessage, isLoading } = loginState;
  console.log(loginState);
  return (
    <Card title="Login" className="login-form">
      <Input
        id="username"
        placeholder="username"
        type="text"
        value={username}
        onChange={handleChange}
      />
      <Input
        id="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        type="primary"
      >{
        isLoading ? 'Logging In...' : 'Submit'
      }</button>
      <div className="login-error">
        { errorMessage }
      </div>
    </Card>
  )
}
