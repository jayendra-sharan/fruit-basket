import React from 'react';
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