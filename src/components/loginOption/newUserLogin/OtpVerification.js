// components/OTPVerification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpVerification.css';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNext = () => {
    if (otp.length === 6) {
      navigate('/PersonalDetailsForm'); 
    } else {
      alert('Please enter a 6-digit OTP.');
    }
  };

  return (
    <div className="otp-verification-container" 
    style={{ textAlign: 'center' ,  marginTop: '10%' }}
    >
      <h4 className="heading">OTP Verification</h4>
      <p className="instruction">Please enter the 6-digit OTP sent to your mobile number</p>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        maxLength={6}
        placeholder="Enter OTP"
        className="otp-input"
      />
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default OTPVerification;
