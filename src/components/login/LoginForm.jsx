import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Button } from 'antd';
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
    e.preventDefault();
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
  
  const disableLogin = () => {
    return !username || !password || isLoading;
  }

  return (
    <Card title="Login" className="login-form">
      <form onSubmit={handleClick}>
        <Input
          autoComplete="username"
          id="username"
          placeholder="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <Input
          autoComplete="current-password"
          id="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          disabled={disableLogin()}
          htmlType="submit"
          type="primary"
        >{
          isLoading ? 'Logging In...' : 'Submit'
        }</Button>
      </form>
      <div className="login-error">
        { errorMessage }
      </div>
    </Card>
  )
}

LoginForm.propTypes = {
  setLoginStatus: PropTypes.func.isRequired
}
