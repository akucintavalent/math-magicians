import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Navbar from './components/navbar/Navbar';

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
          <Route path="/" element={<Calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;
