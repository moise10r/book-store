const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
const FECTH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
const FECTH_BOOK_FAILURE = 'FECTH_BOOK_FAILURE';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const fecthBookRequest = () => ({
  type: FETCH_BOOK_REQUEST,
});

export const fecthBookSuccess = (books) => ({
  type: FECTH_BOOK_SUCCESS,
  payload: books,
});

export const fecthBookFailure = (error) => ({
  type: FECTH_BOOK_FAILURE,
  payload: error,
});

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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_BOOK_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FECTH_BOOK_SUCCESS:
//       return {
//         loading: false,
//         books: action.payload,
//         error: '',
//       };
//     case FECTH_BOOK_FAILURE:
//       return {
//         loading: false,
//         books: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default reducer;
