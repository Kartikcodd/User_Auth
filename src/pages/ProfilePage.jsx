import React, {useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../CustomCSS/ProfilePage.css';
import UpdateProfileForm from './UpdateProfileForm';

function ProfilePage() {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);

  if (!user) return <p>Loading profile...</p>;

  return (
     <div className="profile-page">
      <div className="profile-card">
        <img src={user.profileImage || 'https://via.placeholder.com/150'} alt="Profile" className="profile-image" />
        <h2>Welcome, {user.name || user.email}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user._id}</p>

        {/* Show Update Button */}
        <button onClick={() => setShowForm(true)} className="update-btn">
          Update Profile
        </button>
      </div>

      {/* Show form when user clicks "Update Profile" */}
      {showForm && (
        <div className="form-container">
          <UpdateProfileForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
