import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/services/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';
import PublicRoute from './components/PublicRoutes';

// Import all pages
import LoginPage from './pages/LoginScreen';
import RegisterPage from './pages/RegisterScreen';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          } />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          } />
         
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;