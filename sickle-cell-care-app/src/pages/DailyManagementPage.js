import React from 'react';
import './DailyManagementPage.css';

const Dos = () => (
  <div className="dos-donts-section">
    <h3>DOs</h3>
    <ul>
      <li>Hydration: 2–4 liters per day to prevent sickling.</li>
      <li>Routine follow-up: Regular hematology clinic visits.</li>
      <li>Medication adherence: Folic acid, Hydroxyurea, Penicillin prophylaxis, Vaccinations.</li>
      <li>Thermal regulation: Stay warm during cold weather.</li>
      <li>Stress management & adequate sleep.</li>
      <li>Prompt treatment for fever, infection, chest pain, or fatigue.</li>
      <li>Use mosquito-treated nets (especially in malaria-endemic regions).</li>
    </ul>
  </div>
);

const Donts = () => (
  <div className="dos-donts-section">
    <h3>DON'Ts</h3>
    <ul>
      <li>Avoid dehydration and fasting.</li>
      <li>Avoid strenuous activity or overexertion.</li>
      <li>Avoid smoking, alcohol, and caffeinated drinks.</li>
      <li>Avoid cold exposure or sudden temperature changes.</li>
      <li>Do not ignore early symptoms of infection or chest pain.</li>
      <li>Avoid high altitudes or low-oxygen environments.</li>
    </ul>
  </div>
);

const HydrationTracker = () => {
  const [glasses, setGlasses] = React.useState(0);
  const totalGlasses = 12; // Example goal: 12 glasses

  return (
    <div className="hydration-tracker">
      <h3>Hydration Tracker</h3>
      <p>{glasses} out of {totalGlasses} glasses</p>
      <div className="glasses">
        {Array.from({ length: totalGlasses }).map((_, index) => (
          <span
            key={index}
            className={`glass ${index < glasses ? 'full' : ''}`}
            onClick={() => setGlasses(index + 1)}
          >
            &#129380;
          </span>
        ))}
      </div>
      <button onClick={() => setGlasses(0)}>Reset</button>
    </div>
  );
};

const DailyManagementPage = () => {
  return (
    <div className="daily-management-page">
      <h2>Daily Management Hub</h2>
      <div className="dos-donts-container">
        <Dos />
        <Donts />
      </div>
      <HydrationTracker />
      <div className="placeholders">
        <h3>Coming Soon</h3>
        <p>Weather Alert System</p>
        <p>Activity Level Recommendations</p>
      </div>
    </div>
  );
};

export default DailyManagementPage;
