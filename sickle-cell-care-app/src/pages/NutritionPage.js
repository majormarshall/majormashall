import React, { useState } from 'react';
import './NutritionPage.css';

const recipes = [
  { title: 'Salmon with Quinoa', description: 'Rich in Omega-3 and protein.' },
  { title: 'Lentil Soup', description: 'High in folate and fiber.' },
  { title: 'Berry Smoothie', description: 'Packed with antioxidants and vitamins.' },
];

const foodScores = [
  { food: 'Leafy Greens', score: 'Excellent', reason: 'High in folate.' },
  { food: 'Berries', score: 'Excellent', reason: 'Rich in antioxidants.' },
  { food: 'Processed Meats', score: 'Avoid', reason: 'High in sodium and preservatives.' },
  { food: 'Sugary Drinks', score: 'Avoid', reason: 'Can contribute to inflammation.' },
];

const SupplementReminders = () => {
  const [supplements] = useState([
    { name: 'Folic Acid', time: 'Morning' },
    { name: 'Vitamin D', time: 'Morning' },
  ]);

  return (
    <div className="supplement-reminders">
      <h3>Supplement Reminders</h3>
      <ul>
        {supplements.map((s, i) => <li key={i}>{s.name} - {s.time}</li>)}
      </ul>
    </div>
  );
};

const NutritionPage = () => {
  return (
    <div className="nutrition-page">
      <h2>Nutrition Engine</h2>
      <p>Your guide to a healthy diet for managing Sickle Cell Disease.</p>

      <div className="nutrition-section">
        <h3>SCD-Safe Recipes</h3>
        <div className="recipe-cards">
          {recipes.map((r, i) => (
            <div key={i} className="card">
              <h4>{r.title}</h4>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="nutrition-section">
        <h3>Food Scoring System</h3>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Score</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {foodScores.map((f, i) => (
              <tr key={i}>
                <td>{f.food}</td>
                <td className={`score-${f.score.toLowerCase()}`}>{f.score}</td>
                <td>{f.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SupplementReminders />
    </div>
  );
};

export default NutritionPage;
