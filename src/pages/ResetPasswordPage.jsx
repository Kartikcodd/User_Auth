import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/auth';

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      await resetPassword(token, { newPassword });
      navigate('/login');
    } catch (err) {
      setError('Failed to reset password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleReset}>Reset Password</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default ResetPasswordPage;
