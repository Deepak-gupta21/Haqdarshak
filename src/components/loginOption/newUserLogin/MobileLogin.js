// components/MobileLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileLogin.css';

const MobileLogin = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [locationError, setLocationError] = useState(null);
  const navigate = useNavigate();

  const states = ['State 1', 'State 2', 'State 3'];
  const districts = {
    'State 1': ['District 1-1', 'District 1-2'],
    'State 2': ['District 2-1', 'District 2-2'],
    'State 3': ['District 3-1', 'District 3-2'],
  };

  const stateDistricts = state ? districts[state] : [];

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => setLocationError(error.message)
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  };

 

  return (
    <div className="mobile-login-container"  style={{ textAlign: 'center' ,  marginTop: '10%' }}>
      <h4 className="heading">Choose Location</h4>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="dropdown"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="district">District:</label>
        <select
          id="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          disabled={!state}
          className="dropdown"
        >
          <option value="">Select District</option>
          {stateDistricts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter Pincode"
          className="input"
        />
      </div>

      <div className="separator">Or</div>

      <button className="location-button" onClick={handleUseCurrentLocation}>
        Use Your Current Location
      </button>
      {locationError && <p className="error">{locationError}</p>}

  
      <button className="next-button" onClick={() => navigate('/login/EnterPhoneNumber')}>Next</button>
    </div>
  );
};

export default MobileLogin;
