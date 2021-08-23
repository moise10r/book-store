const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

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
          id: state.length,
          category: action.payload.category,
          title: action.payload.title,
          author: 'Suzanne Collins',
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
