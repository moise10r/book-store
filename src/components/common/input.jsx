import React from 'react';
import propTypes from 'prop-types';

const Input = ({ value, name, onChange }) => (
  <input onChange={onChange} type="text" name={name} value={value} className="add-input" placeholder="Book title" />
);

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default Input;
