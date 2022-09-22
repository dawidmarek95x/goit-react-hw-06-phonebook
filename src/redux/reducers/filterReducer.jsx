import { createReducer } from '@reduxjs/toolkit';

const initialState = '';

const filterReducer = createReducer(initialState, {
  setFilter: (state, { payload }) => payload,
});

export default filterReducer;