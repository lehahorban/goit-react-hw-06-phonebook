import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts-reducer';
import filter from './filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;

// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
