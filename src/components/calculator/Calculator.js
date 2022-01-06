import React, { useState } from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
import Button from '../button/Button';

const Calculator = () => {
  const [calc, setCalc] = useState({});
  const handleClick = (e) => {
    const buttonName = e.target.name;
    const newCalc = calculate(calc, buttonName);
    setCalc((prevCalc) => ({ ...prevCalc, ...newCalc }));
  };
  const {
    total,
    next,
    operation,
  } = calc;
  const display = ((total || '') + (operation || '') + (next || '')) || '0';
  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5',
    '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  buttonNames.forEach((buttonName, index) => {
    if ((index + 1) % 4 === 0) {
      buttons.push(
        <Button
          key={buttonName}
          handleClick={handleClick}
          buttonName={buttonName}
          isOrange
        />,
      );
    } else {
      buttons.push(
        <Button key={buttonName} handleClick={handleClick} buttonName={buttonName} />,
      );
    }
  });

  return (
    <div id="calculator">
      <p id="input">{display}</p>
      {buttons}
    </div>
  );
};

export default Calculator;
