/* eslint-disable camelcase */
import axios from 'axios';

const FECTH_BOOK = 'FECTH_BOOK';
// const ADD_BOOK = 'ADD_BOOK';
// const DELETE_BOOK = 'DELETE_BOOK';

const initialState = [];

// const apiKey = 'KbiaiTAThbC5mkqPt08M';
// const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

// export const addBook = (book) => async (dispatch) => {
//   try {
//     const res = await fetch(`${baseUrl}${apiKey}/books`, {
//       method: 'POST',
//       body: JSON.stringify(book),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });

//     dispatch({
//       type: ADD_BOOK,
//       payload: res.data,
//     });
//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };
export const getBooks = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(res.data);
  dispatch({
    type: FECTH_BOOK,
    payload: res.data,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_BOOK:
      return action.payload;
    // case ADD_BOOK:
    //   return [...state, {
    //     ...action.payload,
    //     author: 'Moise Rushanika',
    //     progress: {
    //       completPercentage: '35',
    //       status: 'completed',
    //     },
    //     currentChapter: 'Introduction',
    //   }];
    // case DELETE_BOOK:
    //   return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
