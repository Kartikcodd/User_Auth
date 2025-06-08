import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from '../api/auth';

function UpdateProfileForm({ onClose }) {
  const { token, user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append('name', name);
    if (bio) formData.append('bio', bio);
    if (image) formData.append('profileImage', image);

    try {
  const res = await updateProfile(token, formData);
alert(res.data.message);

      setUser({
        ...user,
        name,
        bio,
        profileImage: URL.createObjectURL(image), // temporary preview
      });
      setMessage('Profile updated successfully');

      setTimeout(() => {
        setMessage('');
        if (onClose) onClose();
      }, 1000);
      

    } catch (err) {
      setMessage('Failed to update profile');
    }
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Update Profile</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default UpdateProfileForm;
