import React from 'react';

const AddBook = () => (
  <section className="add-book-seciton">
    <div className="add-book-main-container">
      <h3 className="title">ADD NEW BOOK</h3>
      <form id="add-book" className="flex-between">
        <input type="text" name="addBook" className="add-input" placeholder="Book title" />
        <div className="right-container flex-between">
          <select name="selectCategory" id="select">
            <option value="category1">Action</option>
            <option value="category1">Science</option>
            <option value="category1">Economy</option>
          </select>
          <button type="submit" className="submut-btn"> ADD BOOK</button>
        </div>
      </form>
    </div>
  </section>
);

export default AddBook;
