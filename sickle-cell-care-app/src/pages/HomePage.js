import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to the Sickle Cell Care Platform</h1>
        <p>A Comprehensive Digital Health Solution for Sickle Cell Patients</p>
      </header>
      <section className="homepage-section">
        <h2>About Sickle Cell Disease</h2>
        <p>
          Sickle Cell Disease (SCD) is a hereditary blood disorder characterized by abnormal hemoglobin.
          This platform is designed to help patients manage their condition through continuous monitoring,
          nutritional guidance, and lifestyle management.
        </p>
      </section>
      <section className="homepage-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a clinical support tool, a lifestyle guide, and a preventive monitoring
          system for SCD patients. We aim to improve the quality of life for patients by empowering them with
          the tools and information they need to manage their health effectively.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
