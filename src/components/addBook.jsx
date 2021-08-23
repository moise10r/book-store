import React from 'react';
import propTypes from 'prop-types';
import Input from './common/input';
import Select from './common/select';

const AddBook = ({ onChange, value, name }) => (
  <section className="add-book-seciton">
    <div className="add-book-main-container">
      <h3 className="title">ADD NEW BOOK</h3>
      <form id="add-book" className="flex-between">
        <Input onChange={onChange} name={name} value={value} />
        <div className="right-container flex-between">
          <Select />
          <button type="submit" className="submut-btn"> ADD BOOK</button>
        </div>
      </form>
    </div>
  </section>
);

AddBook.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default AddBook;
