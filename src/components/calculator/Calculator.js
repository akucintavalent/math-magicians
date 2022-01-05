import React from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';

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
    return (
      <div id="calculator">
        <p id="input">{display}</p>
        <button type="button" onClick={this.handleClick} name="AC" id="ac">AC</button>
        <button type="button" onClick={this.handleClick} name="+/-" id="plus-minus">+/-</button>
        <button type="button" onClick={this.handleClick} name="%" id="percent">%</button>
        <button type="button" onClick={this.handleClick} name="÷" className="Operations" id="div">÷</button>
        <button type="button" onClick={this.handleClick} name="7" id="btn-7">7</button>
        <button type="button" onClick={this.handleClick} name="8" id="btn-8">8</button>
        <button type="button" onClick={this.handleClick} name="9" id="btn-9">9</button>
        <button type="button" onClick={this.handleClick} name="x" className="Operations" id="mult">&times;</button>
        <button type="button" onClick={this.handleClick} name="4" id="btn-4">4</button>
        <button type="button" onClick={this.handleClick} name="5" id="btn-5">5</button>
        <button type="button" onClick={this.handleClick} name="6" id="btn-6">6</button>
        <button type="button" onClick={this.handleClick} name="-" className="Operations" id="minus">-</button>
        <button type="button" onClick={this.handleClick} name="1" id="btn-1">1</button>
        <button type="button" onClick={this.handleClick} name="2" id="btn-2">2</button>
        <button type="button" onClick={this.handleClick} name="3" id="btn-3">3</button>
        <button type="button" onClick={this.handleClick} name="+" className="Operations" id="plus">+</button>
        <button type="button" onClick={this.handleClick} name="0" id="btn-0">0</button>
        <button type="button" onClick={this.handleClick} name="." id="dot">.</button>
        <button type="button" onClick={this.handleClick} name="=" className="Operations" id="equal">=</button>
      </div>
    );
  }
}

export default Calculator;
