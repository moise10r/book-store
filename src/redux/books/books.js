const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [{
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
}];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          category: action.payload.category,
          title: action.payload.title,
          author: action.payload.author,
          progress: {
            completPercentage: '0',
            status: 'completed',
          },
          currentChapter: 'Introduction',
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
