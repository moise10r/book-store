/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import propTypes from 'prop-types';

const categories = [
  { id: 1, category: '' },
  { id: 2, category: 'Action' },
  { id: 3, category: 'Science' },
  { id: 4, category: 'Economy' },
];
const Select = ({ value, name, onChange }) => (
  <select onChange={(e) => onChange(e)} name={name} value={value} id="select" required>
    {
      categories.map(({ id, category }) => (
        <option key={id} value={category}>{category}</option>
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
