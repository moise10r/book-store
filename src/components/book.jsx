import React from 'react';

const Book = () => (
  <div className="book-container flex-between">
    <div className="left-container">
      <h4 className="category">Action</h4>
      <h5 className="title">The Hunger Games</h5>
      <span className="auth">Suzanne Collins</span>
      <ul className="actions flex-start">
        <li className="action"><a href="#2">Comment</a></li>
        <li className="action"><a href="#2">Remove</a></li>
        <li className="action"><a href="#2">Edit</a></li>
      </ul>
    </div>
    <div className="cener-container">
      <div className="progress">
        <div className="progress-circle" />
      </div>
      <div className="percentage flex-center">
        <span>64%</span>
        <span>Completed</span>
      </div>
    </div>
    <div className="right-container">
      <h4 className="chapter-state">Current chapiter</h4>
      <h5 className="Chapter">Chapter 7</h5>
      <button type="button" className="btn">Update progress</button>
    </div>
  </div>
);

export default Book;
