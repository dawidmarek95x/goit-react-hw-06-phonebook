import contactsReducer from './contactsReducer';
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: contactsReducer,
})

export default store;