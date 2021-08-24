/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <div className="book-container flex-between">
    <div className="left-container">
      <h4 className="category">{book.category}</h4>
      <h5 className="title">{book.title}</h5>
      <span className="auth">{book.author}</span>
      <ul className="action-list flex-start">
        <li className="action"><a href="#2">Comment</a></li>
        <li onClick={() => onClick(book.id)} role="menu" className="action"><a href="#2">Remove</a></li>
        <li className="action"><a href="#2">Edit</a></li>
      </ul>
    </div>
    <div className="cener-container">
      <div className="progress">
        <div className="progress-circle" />
      </div>
      <div className="percentage flex-center">
        <span>
          {book.progress.completPercentage}
          %
        </span>
        <span>{book.progress.status}</span>
      </div>
    </div>
    <div className="right-container">
      <h4 className="chapter-state">Current chapiter</h4>
      <h5 className="Chapter">{book.currentChapter}</h5>
      <button type="button" className="btn">Update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.string,
    category: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
    progress: propTypes.objectOf(propTypes.string),
    currentChapter: propTypes.string,
  }).isRequired,
  onClick: propTypes.func.isRequired,
};
export default Book;
