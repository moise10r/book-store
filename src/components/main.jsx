import React from 'react';
import BookList from './bookList';
import Header from './header';

const books = [
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

const Main = () => (
  <div className="container">
    <Header />
    <BookList books={books} />
  </div>
);

export default Main;
