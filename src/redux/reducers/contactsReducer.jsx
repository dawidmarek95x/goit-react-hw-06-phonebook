import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const contactsReducer = createReducer(initialState, {
  addContact: (state, { payload }) => {
    return (state = [payload, ...state]);
  },
  deleteContact: (state, { payload }) => {
    return (state = state.filter(c => c.id !== payload));
  },
});

export default contactsReducer;