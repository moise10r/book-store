import React from 'react';
import propTypes from 'prop-types';
import Input from './common/input';
import Select from './common/select';

const AddBook = ({ onChange, onSubmit, value }) => (
  <section className="add-book-section">
    <div className="add-book-main-container">
      <h3 className="title">ADD NEW BOOK</h3>
      <form id="add-book" className="flex-between" onSubmit={onSubmit}>
        <Input onChange={onChange} name={Object.keys(value)[0]} value={value.title} />
        <div className="right-container flex-between">
          <Select onChange={onChange} name={Object.keys(value)[1]} value={value.categories} />
          <button type="submit" className="submut-btn"> ADD BOOK</button>
        </div>
      </form>
    </div>
  </section>
);

AddBook.propTypes = {
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  value: propTypes.objectOf(propTypes.string).isRequired,
};
export default AddBook;
