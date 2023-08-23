import React from 'react';
import { PropTypes } from 'prop-types';

function Button({ onClick, text, buttonClass }) {
  return (
    <button type="button" className={buttonClass} onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
