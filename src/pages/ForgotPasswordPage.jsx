import React, { useState } from 'react';
import { forgotPassword } from '../api/auth';
import { Link } from "react-router-dom";
import "../CustomCSS/forgotPass.css";


function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      await forgotPassword({ email });
      setMessage('Reset link sent to your email');
    } catch (err) {
      setError('Error sending reset link');
    }
  };

  return (
<div className="form-container">
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <p style={{ marginTop: "15px" }} className='redirect-text'>
        Back to <Link to="/login" >Login</Link>
      </p>
    </div>
  );

}

export default ForgotPasswordPage;
