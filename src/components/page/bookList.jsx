import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../../redux/books/books';
import Book from '../book';
import AddBook from '../addBook';

const BookList = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setvalue] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = ({ target: input }) => {
    const valueObj = { ...value };
    valueObj[input.name] = input.value;
    setvalue(valueObj);
  };

  const handleSubmit = (e) => {
    const newBook = {
      item_id: Math.random(),
      category: value.category,
      title: value.title,
    };
    dispatch(addBook(newBook));
    setvalue({ ...value, title: '' });
    e.preventDefault();
  };

  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="container">
      <div className="books-main-wrapper width-100">
        <ul className="book-list flex-center flex width-100">
          {
      books.map((book) => (
        <li key={book.item_id} className="book width-100">
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
