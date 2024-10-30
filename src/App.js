// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Haqdarshak from './components/Haqdarshak';
import BenefitsInfo from './components/BenefitsInfo';
import LanguageSelection from './components/languagePage/LanguageSelection';
import LoginOptions from './components/loginOption/LoginOptions';
import NewUserLogin from './components/loginOption/newUserLogin/MobileLogin';
import PersonalDetails from './components/PersonalDetailsForm/PersonalDetailsForm';
import EnterPhoneNumberLogin from './components/loginOption/newUserLogin/EnterPhone';
import OTPVerification from './components/loginOption/newUserLogin/OtpVerification';
import OnBoarding from './components/OnBoarding/OnBoarding';
import YojnaCard from './components/YojnaCard/YojnaCard';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center'}}>
        <Routes>
          <Route path="/" element={<Haqdarshak />} />
          <Route path="/benefits-info" element={<BenefitsInfo />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
          <Route path="/login-options" element={<LoginOptions />} />
          <Route path="/login/newUser" element={<NewUserLogin />} />

          <Route path="/login/EnterPhoneNumber" element={<EnterPhoneNumberLogin />} />
          <Route path="/login/OTPVerification" element={<  OTPVerification />} />
          <Route path="/PersonalDetailsForm" element={< PersonalDetails />} />
          <Route path="/OnBoarding" element={< OnBoarding />} />
          <Route path="/login/YojnaCard" element={< YojnaCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
