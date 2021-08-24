import React from 'react';
import propTypes from 'prop-types';

const Select = ({ value, name, onChange }) => (
  <select onChange={(e) => onChange(e)} name={name} value={value} id="select">
    <option value="Action">Action</option>
    <option value="Science">Science</option>
    <option value="Economy">Economy</option>
  </select>
);

Select.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Select;
