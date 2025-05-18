import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import './App.css'; // Importez le fichier CSS

ChartJS.register(ArcElement);

const FractionPieChart = () => {
  const [fraction1, setFraction1] = useState({ numerator: 1, denominator: 2 });
  const [fraction2, setFraction2] = useState({ numerator: 1, denominator: 2 });

  const handleInputChange = (e, fractionSetter) => {
    const { name, value } = e.target;
    fractionSetter(prevState => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  const calculateSum = (frac1, frac2) => {
    const numerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
    const denominator = frac1.denominator * frac2.denominator;
    return { numerator, denominator };
  };

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const simplifyFraction = (fraction) => {
    const commonDivisor = gcd(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / commonDivisor,
      denominator: fraction.denominator / commonDivisor
    };
  };

  const sumFraction = simplifyFraction(calculateSum(fraction1, fraction2));

  const createPieData = (fraction) => ({
    labels: ['Numerator', 'Denominator'],
    datasets: [{
      data: [fraction.numerator, fraction.denominator - fraction.numerator],
      backgroundColor: ['#FF6384', '#36A2EB']
    }]
  });

  return (
    <div className="chart-wrapper">
      <div>
        <h2>Fraction 1</h2>
        <input
          type="number"
          name="numerator"
          value={fraction1.numerator}
          onChange={(e) => handleInputChange(e, setFraction1)}
          placeholder="Numerator"
        />
        <input
          type="number"
          name="denominator"
          value={fraction1.denominator}
          onChange={(e) => handleInputChange(e, setFraction1)}
          placeholder="Denominator"
        />
        <div className="chart-container">
          <Pie data={createPieData(fraction1)} />
        </div>
      </div>
      <div>
        <h2>Fraction 2</h2>
        <input
          type="number"
          name="numerator"
          value={fraction2.numerator}
          onChange={(e) => handleInputChange(e, setFraction2)}
          placeholder="Numerator"
        />
        <input
          type="number"
          name="denominator"
          value={fraction2.denominator}
          onChange={(e) => handleInputChange(e, setFraction2)}
          placeholder="Denominator"
        />
        <div className="chart-container">
          <Pie data={createPieData(fraction2)} />
        </div>
      </div>
      <div>
        <h2>Sum of Fractions</h2>
        <div className="chart-container">
          <Pie data={createPieData(sumFraction)} />
        </div>
        <div>
          <h3>Sum (Numerical)</h3>
          <input
            type="text"
            value={`${sumFraction.numerator}/${sumFraction.denominator}`}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default FractionPieChart;
