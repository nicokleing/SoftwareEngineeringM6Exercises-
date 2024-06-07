import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers.');
      setResult(null);
      return;
    }

    if (operator === '/' && number2 === 0) {
      setError('Division by zero is not allowed.');
      setResult(null);
      return;
    }

    setError('');
    let res;

    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number1 / number2;
        break;
      default:
        res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>Basic Calculator</h2>
      <input
        type="text"
        className="calculator-input"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select
        className="calculator-select"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        className="calculator-input"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button className="calculator-button" onClick={calculateResult}>
        Calculate
      </button>
      {error && <div className="calculator-error">{error}</div>}
      {result !== null && (
        <div className="calculator-result">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Calculator;
