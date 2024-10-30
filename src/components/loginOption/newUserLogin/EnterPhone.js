// components/MobileNumberVerification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterPhone.css';

const EnterPhone = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [proceedWithOtp, setProceedWithOtp] = useState(null);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && mobileNumber.length === 10) {
      setShowConfirmation(true);
    }
  };

  const handleNext = () => {
    if (proceedWithOtp === 'yes') {
      navigate('/login/OTPVerification'); 
    } else {
      navigate('/PersonalDetailsForm'); 
  };
}

  return (
    <div className="mobile-verification-container"  style={{ textAlign: 'center' ,  marginTop: '10%' }}>
      <h4 className="heading">What is your mobile number?</h4>
      <input
        type="text"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        onKeyPress={handleEnterPress}
        maxLength={10}
        placeholder="Enter your mobile number"
        className="input"
      />
      
      {showConfirmation && (
        <div className="confirmation-section">
          <p>Do you want to proceed with OTP verification?</p>
          <div className="option-buttons">
            <button 
              className={`option-button ${proceedWithOtp === 'yes' ? 'selected' : ''}`}
              onClick={() => setProceedWithOtp('yes')}
            >
              Yes
            </button>
            <button 
              className={`option-button ${proceedWithOtp === 'no' ? 'selected' : ''}`}
              onClick={() => setProceedWithOtp('no')}
            >
              No
            </button>
          </div>
          {proceedWithOtp && (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EnterPhone;

