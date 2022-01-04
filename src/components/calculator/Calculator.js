import React from 'react';
import './calculator.css';
// import PropTypes from 'prop-types';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator">
        <p id="input">0</p>
        <button type="button" id="ac">AC</button>
        <button type="button" id="plus-minus">+/-</button>
        <button type="button" id="percent">%</button>
        <button type="button" className="Operations" id="div">÷</button>
        <button type="button" id="btn-7">7</button>
        <button type="button" id="btn-8">8</button>
        <button type="button" id="btn-9">9</button>
        <button type="button" className="Operations" id="mult">x</button>
        <button type="button" id="btn-4">4</button>
        <button type="button" id="btn-5">5</button>
        <button type="button" id="btn-6">6</button>
        <button type="button" className="Operations" id="minus">-</button>
        <button type="button" id="btn-1">1</button>
        <button type="button" id="btn-2">2</button>
        <button type="button" id="btn-3">3</button>
        <button type="button" className="Operations" id="plus">+</button>
        <button type="button" id="btn-0">0</button>
        <button type="button" id="dot">.</button>
        <button type="button" className="Operations" id="equal">=</button>
      </div>
    );
  }
}

export default Calculator;
