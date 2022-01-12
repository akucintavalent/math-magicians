import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorContainer from './components/calculator-container/CalculatorContainer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<CalculatorContainer />} />
        </Routes>
      </>
    );
  }
}

export default App;
