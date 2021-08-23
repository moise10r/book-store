/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Book from './book';

const BookList = ({ books }) => (
  <div className="books-main-wrapper">
    <ul className="book-list flex-center">
      {
      books.map((book) => (
        <li key={book.id} className="book">
          <Book book={book} />
        </li>
      ))
      }
    </ul>
  </div>
);

BookList.propTypes = {
  books: propTypes.array.isRequired,
};

export default BookList;
