/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <div className="book-container flex flex-around">
    <div className="left-container">
      <h4 className="category">{book.category}</h4>
      <h5 className="title">{book.title}</h5>
      <span className="auth">{book.author}</span>
      <ul className="action-list flex flex-start">
        <li className="action"><a href="#2">Comment</a></li>
        <li onClick={() => onClick(book.item_id)} role="menu" className="action"><a href="#2">Remove</a></li>
        <li className="action"><a href="#2">Edit</a></li>
      </ul>
    </div>
    <div className="center-container">
      <div className="progress-circle over50 p77">
        <div className="left-half-clipper">
          <div className="first50-bar" />
          <div className="value-bar" />
        </div>
      </div>
      <div className="percentage flex flex-center">
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
    id: propTypes.number,
    category: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
    progress: propTypes.objectOf(propTypes.string),
    currentChapter: propTypes.string,
  }).isRequired,
  onClick: propTypes.func.isRequired,
};
export default Book;
