// components/UserInfo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalDetailsForm.css';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
   
    navigate('/OnBoarding');
  };

  return (
    <div className="user-info-container"
    style={{ textAlign: 'center' ,  marginTop: '5%' }}>

      <h4 className="heading">Enter Your Details</h4>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth or Age:</label>
        <input
          type="date"
          id="dob"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="input"
        />
      
        <span className="separator">or</span>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          className="input"
        />
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default UserInfo;
