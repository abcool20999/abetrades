import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './Auth/AuthProvider';
import axios from 'axios';
import appConfig from '../../../app-config';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useContext(AuthContext); // Assuming user data is in context
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as necessary
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      // Load user data from context or fetch from backend
      setProfileData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // Add more fields
      });
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);

    axios.put(`${appConfig.BACKEND_BASE_URL}/api/user/update`, profileData)
      .then((response) => {
        console.log('Profile updated:', response.data);
        // Handle success message or further actions
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {/* Add more fields as needed */}
        <div className="form-group">
          {isEditing ? (
            <button type="submit">Save</button>
          ) : (
            <button type="button" onClick={handleEdit}>Edit Profile</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
