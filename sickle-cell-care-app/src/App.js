import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DailyManagementPage from './pages/DailyManagementPage';
import HealthMetricsPage from './pages/HealthMetricsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily-management" element={<DailyManagementPage />} />
          <Route path="/health-metrics" element={<HealthMetricsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
