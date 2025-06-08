import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password });
      const token = res.data.token;
      const user = res.data.user; // assuming your backend returns user info
      localStorage.setItem('token', token);
      setToken(token);
      setUser(user); //  add this to update user context
      navigate('/app/profile');
      console.log("adding");
      
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
        <div>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
        <div className="redirect-text">
          Don't have an account? <Link to="/register">Signup</Link>
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>  {error && <p>{error}</p>}
      </div>  );
}

export default LoginPage;