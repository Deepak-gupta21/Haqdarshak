// components/BenefitsInfo.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import benefitsImage from '../assets/benefits.jpg';

const BenefitsInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/language-selection'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div style={{ backgroundColor: '#4B0082', height: '100vh',
      width: '100vw',color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
      <h2>Getting benefits is now easy</h2>
      {/* <img src={benefitsImage} alt="Benefits Information" style={{ width: '100%', height: 'auto' }} /> */}
    </div>
  );
};

export default BenefitsInfo;
