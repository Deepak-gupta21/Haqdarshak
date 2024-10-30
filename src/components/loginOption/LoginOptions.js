// components/LoginOptions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginOptions.css';

const LoginOptions = () => {
  const navigate = useNavigate(); 

  const handleLoginMethodSelect = (method) => {
   
    switch (method) {
      case 'NewUser':
        navigate('/login/newUser');
        break;
      case 'Phone':
        navigate('/login/EnterPhoneNumber');
        break;
      case 'Card':
        navigate('/login/YojnaCard'); 
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-options-container"  style={{ textAlign: 'center' ,  marginTop: '10%' }}>
      <h3 className="login-options-heading">How do you want to log in?</h3>
      <p className="instruction-text">Please select one of the following options:</p>
      <div className="button-group">
        <button className="login-button" onClick={() => handleLoginMethodSelect('NewUser')}>Register me as a new user</button>
        <button className="login-button" onClick={() => handleLoginMethodSelect('Phone')}>Use my phone number</button>
        <button className="login-button" onClick={() => handleLoginMethodSelect('Card')}>Use my Yojna card</button>
      </div>
    </div>
  );
};

export default LoginOptions;
