import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../api/auth';
import '../components/Applayout.css'; 

function AppLayout() {
  const { token, setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(token);
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="layout-container">
      <nav className="navbar">
        <Link to="/app/profile" className="nav-link">Profile</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
