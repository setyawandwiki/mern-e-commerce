import React from 'react';
import Alert from 'react-bootstrap/Alert';

function MessageBox({ variant, children }) {
  return (
    <div>
      <Alert variant={variant || 'info'}>{children}</Alert>
    </div>
  );
}

export default MessageBox;
