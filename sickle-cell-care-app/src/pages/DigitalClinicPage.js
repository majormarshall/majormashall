import React from 'react';
import './DigitalClinicPage.css';

const DigitalClinicPage = () => {
  return (
    <div className="digital-clinic-container">
      <h1>Digital Clinic</h1>
      <p className="subtitle">Your connection to virtual care and support.</p>

      <div className="clinic-section">
        <h2>EHR Integration</h2>
        <p>Securely access your medical records, schedule appointments, and manage your prescriptions.</p>
        <ul>
          <li>View Lab Results</li>
          <li>Appointment Scheduler</li>
          <li>Medication Adherence Tracker</li>
        </ul>
      </div>

      <div className="clinic-section">
        <h2>Telehealth & Support</h2>
        <p>Connect with healthcare providers and support groups from the comfort of your home.</p>
        <ul>
          <li>Virtual Consultations</li>
          <li>24/7 Educational Chatbot</li>
          <li>Community Support Groups</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalClinicPage;
