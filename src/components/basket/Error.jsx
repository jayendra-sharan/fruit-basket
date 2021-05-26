import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from "antd";

export default function Error({
  error
}) {
  if (error.hasError) {
    return <Alert
      description={error.errorMessage}
      type="error"
      showIcon
      closable
    />
  }
  return null;
}

Error.propTypes = {
  error: PropTypes.object.isRequired
}