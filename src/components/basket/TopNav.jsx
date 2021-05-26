import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function TopNav({
  setLoginStatus
}) {
  const history = useHistory();
  return (
    <div className='top-nav'>
      <h1>All Items</h1>
      <button type="secondary" onClick={() => {
        history.push('/login');
        setLoginStatus({status: false, user: null })
      }}>
        Sign Out
      </button>
    </div>
  )
}

TopNav.propTypes = {
  setLoginStatus: PropTypes.func.isRequired
}
