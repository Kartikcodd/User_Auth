import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/auth';
// import { useNavigate, Link } from 'react-router-dom';


function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(email, password);
    
    try {
      await register({ email, password });
      navigate('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Signup</button>
      {error && <p>{error}</p>}
      <div className="redirect-text">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
