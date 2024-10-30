// components/Welcome.js
import React, { useEffect, useState } from 'react';
import './OnBoarding.css';

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Find the benefits that is right for you or your bussiness.",
    "Learn eveything you need to apply.",
    "Save schemes and track your bookings."
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 1500); 
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length]);

  return (
    <div className="welcome-container"  style={{ textAlign: 'center' ,  marginTop: '10%' }}>
      <h1 className="welcome-heading">Welcome to Haqdarshak!</h1>
      <p className="success-message">Your profile has been created successfully.</p>
      <div className="steps-list">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <span className={`icon ${index < currentStep ? 'check' : 'loading'}`}>
              {index < currentStep ? '✓' : '...'}
            </span>
            <p className={`step-text ${index < currentStep ? 'completed' : ''}`}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
