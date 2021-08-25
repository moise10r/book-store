/* eslint-disable camelcase */
import axios from 'axios';

const FECTH_BOOK = 'FECTH_BOOK';
const ADD_BOOK = 'ADD_BOOK';
// const DELETE_BOOK = 'DELETE_BOOK';

const initialState = [];

const apiKey = 'KbiaiTAThbC5mkqPt08M';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const getBooks = () => async (dispatch) => {
  const res = await axios.get(`${baseUrl}${apiKey}/books/`);
  dispatch({
    type: FECTH_BOOK,
    payload: res.data,
  });
};

export const addBook = (book) => async (dispatch) => {
  const { data } = await axios.post(`${baseUrl}${apiKey}/books/`, book, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (data === 'Created') {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: 'Moise Rushanika',
        progress: {
          completPercentage: '35',
          status: 'completed',
        },
        currentChapter: 'Introduction',
      }];
    case FECTH_BOOK: {
      const book = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          author: 'Moise Rushanika',
          progress: {
            completPercentage: '35',
            status: 'completed',
          },
          currentChapter: 'Introduction',
        };
      });

      return state.concat(book);
    }
    // case DELETE_BOOK:
    //   return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;

// return [...state, {
//   ...action.payload,
//   author: 'Moise Rushanika',
//   progress: {
//     completPercentage: '35',
//     status: 'completed',
//   },
//   currentChapter: 'Introduction',
// }];

// await fetch(`${baseUrl}${apiKey}/books/`, {
//   method: 'POST',
//   body: JSON.stringify(book),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// });
