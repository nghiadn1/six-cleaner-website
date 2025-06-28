// src/pages/ProfilePage.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileForm from '../components/ProfileForm';
import Header from '../components/NavBar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f8f8', overflowX: 'hidden' }}> {/* Added overflowX: 'hidden' */}


      {/* Main content */}
      <div style={{ display: 'flex', flex: 1, width: '100%' }}>
        {/* Sidebar */}
        <div style={{ flex: '0 0 20%', padding: '40px' }}>
          <Sidebar />
        </div>

        {/* Profile form */}
        <div style={{ flex: 1, padding: '40px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', display: 'flex', gap: '32px', height: '100%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)' }}>
            <div style={{ flex: 1 }}>
              <h2 className="text-center mb-4 fw-bold">HỒ SƠ</h2>
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;