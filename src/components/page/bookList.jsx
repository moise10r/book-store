import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from '../book';
import AddBook from '../addBook';

const BookList = () => {
  const { booksReducer: books } = useSelector((state) => state);
  console.log(books);
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
    e.preventDefault();
    const newBook = {
      item_id: Math.random(),
      category: value.category,
      title: value.title,
    };
    console.log(newBook);
    // dispatch(addBook(newBook));
    setvalue({ ...value, title: '' });
  };

  const handleClick = (id) => {
    // dispatch(removeBook(id));
    console.log(id);
  };
  // let books = [];
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="container">
      <div className="books-main-wrapper">
        <ul className="book-list flex-center">
          {
      [].map((book) => (
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
