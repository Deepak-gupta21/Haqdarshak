// components/LanguageSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css';

const LanguageSelection = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // State for selected language
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); // Set the selected language
    if (onSelectLanguage && typeof onSelectLanguage === 'function') {
      onSelectLanguage(language);
      alert(`Selected Language: ${language}`); // Alert the selected language
    } else {
      console.error('onSelectLanguage is not a function');
    }
  };

  return (
    <div className="language-selection-container" style={{ textAlign: 'center', marginTop: '10%' }}>
      <h3 className="language-selection-heading">Select your language to proceed:</h3>
      <div className="button-group">
        <button
          className={`language-button ${selectedLanguage === 'English' ? 'selected' : ''}`}
          onClick={() => handleLanguageSelect('English')}
        >
          English
        </button>
        <button
          className={`language-button ${selectedLanguage === 'Hindi' ? 'selected' : ''}`}
          onClick={() => handleLanguageSelect('Hindi')}
        >
          Hindi
        </button>
        <button
          className={`language-button ${selectedLanguage === 'Marathi' ? 'selected' : ''}`}
          onClick={() => handleLanguageSelect('Marathi')}
        >
          Marathi
        </button>
      </div>
      <button className="next-button" onClick={() => navigate('/login-options')}>Next</button>
    </div>
  );
};


export default LanguageSelection;
