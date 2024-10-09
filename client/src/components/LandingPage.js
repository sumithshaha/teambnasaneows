import React from 'react';

const LandingPage = ({ user }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h1>
        <p className="text-gray-600">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default LandingPage;