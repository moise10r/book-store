import React from 'react';
import Book from './book';

const BookList = () => (
  <div className="books-main-wrapper">
    <ul className="book-list flex-center">
      <li className="book">
        <Book />
      </li>
    </ul>
  </div>
);

export default BookList;
