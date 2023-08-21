import React from 'react';
import { PropTypes } from 'prop-types';

function Button({ onClick, text }) {
  return (
    <button type="button" onClick={onClick} className="button-add">{text}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
