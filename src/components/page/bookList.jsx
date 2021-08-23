import React, { useState, useEffect } from 'react';
import Book from '../book';
import AddBook from '../addBook';

const bookList = [
  {
    id: 1,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      completPercentage: '64',
      status: 'completed',
    },
    currentChapter: 'Chapter 17',
  },
  {
    id: 2,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      completPercentage: '8',
      status: 'completed',
    },
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      completPercentage: '0',
      status: 'completed',
    },
    currentChapter: 'Introduction',
  },
];

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [value, setvalue] = useState({
    title: '',
    category: '',
  });

  const onChange = ({ target: input }) => {
    const valueObj = { ...value };
    valueObj[input.name] = input.value;
    setvalue(valueObj);
  };

  useEffect(() => {
    setBooks(bookList);
  }, []);
  return (
    <div className="container">
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
        <AddBook onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default BookList;
