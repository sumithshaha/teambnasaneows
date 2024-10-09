import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import Alert from './components/Alert';
import { register, login, getUser } from './api';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (localStorage.getItem('token')) {
      fetchUser();
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      const userData = await getUser();
      setUser(userData);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      await register(email, password);
      setError('Registration successful. Please check your email for verification.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {error && (
          <Alert variant="destructive" className="mb-4">
            {error}
          </Alert>
        )}
        <Routes>
          <Route 
            path="/" 
            element={
              user ? 
                <Navigate to="/landing" /> : 
                <HomePage onLogin={handleLogin} onSignup={handleSignup} />
            } 
          />
          <Route 
            path="/landing" 
            element={
              user ? 
                <LandingPage user={user} /> : 
                <Navigate to="/" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App