import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});