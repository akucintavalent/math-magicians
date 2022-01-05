import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName, handleClick, isOrange } = this.props;
    return (
      <button type="button" onClick={handleClick} name={buttonName} className={isOrange ? 'Operations' : ''}>{buttonName}</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isOrange: PropTypes.bool.isRequired,
};

export default Button;
