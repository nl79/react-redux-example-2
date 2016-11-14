import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
  // the keys to the object are the state keys.
  // Different state container.
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
