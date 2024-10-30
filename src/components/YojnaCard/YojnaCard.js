// components/ScanYojnaCard.js
import React, { useState  } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import './YojnaCard.css';

const ScanYojnaCard = () => {
    const navigate = useNavigate(); 
  const qrCodeData ="";


  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      
      alert(`Uploaded file: ${file.name}`);
    }
  };



  return (
    <div className="scan-container"  style={{ textAlign: 'center' ,  marginTop: '5%' }}>
      <h2 className="scan-heading">Scan Your Yojna Card</h2>
      
      <div className="qr-code-container">
        <QRCode value={qrCodeData || 'Placeholder QR Code Data'} size={200} />
      </div>

      <div className="upload-section">
        <label htmlFor="upload" className="upload-button">
          Upload from Gallery
          <input type="file" id="upload" accept="image/*" onChange={handleUpload} />
        </label>
      </div>
      <div className="upload-section">
        Or
      </div>

      <div className="mobile-input-section">
      <button className="next-button" onClick={() => navigate('/login/EnterPhoneNumber')}>Use Phone Number</button>
      </div>

    </div>
  );
};

export default ScanYojnaCard;