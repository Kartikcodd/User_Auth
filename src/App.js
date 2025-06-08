import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import AppLayout from './components/AppLayout';
import { useAuth } from './context/AuthContext';
import './App.css';



const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/" element={<Navigate to="/register" />} /> {}
      <Route path="/app" element={<AppLayout />}>
        <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/register" />} /> {}
    </Routes>
  );
}

export default App;
