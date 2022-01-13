import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorContainer from './components/calculator-container/CalculatorContainer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';

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
          <Route path="quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
