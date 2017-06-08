import { combineReducers } from 'redux';
import BooksReducer  from './reducer-books';
import ActiveBookReducer  from './selected-book';
import ColorReducer from './reducer-trafic';

const rootReducer = combineReducers({
 // books : BooksReducer,
 // selectedBook : ActiveBookReducer
  color : ColorReducer
});

export default rootReducer;
