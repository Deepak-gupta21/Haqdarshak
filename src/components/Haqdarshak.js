// components/Haqdarshak.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Haqdarshak = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/benefits-info'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div style={{ backgroundColor: '#4B0082', height: '100vh',
      width: '100vw',color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Haqdarshak</h1>
      <h1 style={{ fontFamily: 'Arial, sans-serif' }}>हक़दर्शक</h1>
      {/* <p>Welcome to Haqdarshak!</p> */}
    </div>
  );
};

export default Haqdarshak;
