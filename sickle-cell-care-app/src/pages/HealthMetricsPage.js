import React, { useState } from 'react';
import './HealthMetricsPage.css';

const HealthMetricsPage = () => {
  const [metrics, setMetrics] = useState({
    hemoglobin: '',
    hematocrit: '',
    wbc: '',
    platelet: '',
    alt: '',
    ast: '',
    creatinine: '',
    crp: '',
    spo2: '',
    heartRate: '',
    bloodPressure: '',
  });

  const [log, setLog] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLogEntry = { ...metrics, date: new Date().toLocaleString() };
    setLog([...log, newLogEntry]);
    // Clear form for next entry
    setMetrics({
        hemoglobin: '',
        hematocrit: '',
        wbc: '',
        platelet: '',
        alt: '',
        ast: '',
        creatinine: '',
        crp: '',
        spo2: '',
        heartRate: '',
        bloodPressure: '',
    });
  };

  return (
    <div className="health-metrics-page">
      <h2>Health Metrics Portal</h2>
      <form onSubmit={handleSubmit} className="metrics-form">
        <h3>Enter Your Latest Lab Results</h3>
        <div className="form-grid">
          <input type="number" name="hemoglobin" placeholder="Hemoglobin (Hb)" value={metrics.hemoglobin} onChange={handleChange} />
          <input type="number" name="hematocrit" placeholder="Hematocrit (HCT)" value={metrics.hematocrit} onChange={handleChange} />
          <input type="number" name="wbc" placeholder="WBC Count" value={metrics.wbc} onChange={handleChange} />
          <input type="number" name="platelet" placeholder="Platelet Count" value={metrics.platelet} onChange={handleChange} />
          <input type="number" name="alt" placeholder="ALT" value={metrics.alt} onChange={handleChange} />
          <input type="number" name="ast" placeholder="AST" value={metrics.ast} onChange={handleChange} />
          <input type="number" name="creatinine" placeholder="Creatinine" value={metrics.creatinine} onChange={handleChange} />
          <input type="number" name="crp" placeholder="CRP" value={metrics.crp} onChange={handleChange} />
          <input type="number" name="spo2" placeholder="Oxygen Saturation (SpO₂)" value={metrics.spo2} onChange={handleChange} />
          <input type="text" name="bloodPressure" placeholder="Blood Pressure (e.g., 120/80)" value={metrics.bloodPressure} onChange={handleChange} />
          <input type="number" name="heartRate" placeholder="Heart Rate" value={metrics.heartRate} onChange={handleChange} />
        </div>
        <button type="submit">Log Metrics</button>
      </form>
      <div className="metrics-log">
        <h3>Your Log</h3>
        {log.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          log.map((entry, index) => (
            <div key={index} className="log-entry">
              <h4>{entry.date}</h4>
              <ul>
                {Object.entries(entry).map(([key, value]) => value && key !== 'date' && <li key={key}><strong>{key}:</strong> {value}</li>)}
              </ul>
            </div>
          ))
        )}
      </div>
       <div className="placeholders">
          <h3>Coming Soon</h3>
          <p>Trend Visualization</p>
          <p>PDF Report Generator</p>
        </div>
    </div>
  );
};

export default HealthMetricsPage;
