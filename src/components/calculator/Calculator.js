import React from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
import Button from '../button/Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calc: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { calc } = this.state;
    const buttonName = e.target.name;
    const newCalc = calculate(calc, buttonName);
    this.setState({ calc: newCalc });
  }

  render() {
    const {
      calc: {
        total,
        next,
        operation,
      },
    } = this.state;
    const display = ((total || '') + (operation || '') + (next || '')) || '0';
    const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5',
      '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const buttons = [];
    buttonNames.forEach((buttonName, index) => {
      if ((index + 1) % 4 === 0) {
        buttons.push(
          <Button
            key={buttonName}
            handleClick={this.handleClick}
            buttonName={buttonName}
            isOrange
          />,
        );
      } else {
        buttons.push(
          <Button key={buttonName} handleClick={this.handleClick} buttonName={buttonName} />,
        );
      }
    });

    return (
      <div id="calculator">
        <p id="input">{display}</p>
        {buttons}
      </div>
    );
  }
}

export default Calculator;
