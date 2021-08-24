/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import propTypes from 'prop-types';

const categories = ['Actions', 'Science', 'Economy'];
const Select = ({ value, name, onChange }) => (
  <select onChange={(e) => onChange(e)} name={name} value={value} id="select">
    {
      categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))
    }
  </select>
);

Select.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Select;
