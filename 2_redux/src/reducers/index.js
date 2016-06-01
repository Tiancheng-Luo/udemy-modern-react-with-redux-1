import { combineReducers } from 'redux';
import ActiveBook from './reducer_active_book'
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({//keys for global state
  activeBook: ActiveBook,
  books: BooksReducer,
});

export default rootReducer;
