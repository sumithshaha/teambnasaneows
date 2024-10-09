import React from 'react';

const Alert = ({ variant = 'info', children }) => {
  const colors = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`p-4 mb-4 rounded-md ${colors[variant]}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;