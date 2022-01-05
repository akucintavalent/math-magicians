import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName, handleClick } = this.props;
    return (
      <button type="button" onClick={handleClick} name={buttonName}>{buttonName}</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
