import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../redux/books/books';
import Book from '../book';
import AddBook from '../addBook';

const BookList = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [value, setvalue] = useState({
    title: '',
    category: '',
  });

  const handleChange = ({ target: input }) => {
    const valueObj = { ...value };
    valueObj[input.name] = input.value;
    setvalue(valueObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length,
      category: value.category,
      title: value.title,
      author: 'Moise Rushanika',
    };
    dispatch(addBook(newBook));
  };

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="container">
      <div className="books-main-wrapper">
        <ul className="book-list flex-center">
          {
      books.map((book) => (
        <li key={book.id} className="book">
          <Book book={book} onClick={handleClick} />
        </li>
      ))
      }
        </ul>
        <AddBook onChange={handleChange} onSubmit={handleSubmit} value={value} />
      </div>
    </div>
  );
};

export default BookList;
