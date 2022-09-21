import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from 'services/localStorageSupport';

const initialState = {
  contacts: loadFromLocalStorage("contacts"),
  filter: "",
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload);
    },
    setContactsFilter: (state, { payload }) => {
      state.filter = payload;
    }
  }
});

export const {addContact, deleteContact, setContactsFilter} = contactsSlice.actions;

export default contactsSlice.reducer;