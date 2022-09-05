import { createAction } from '@reduxjs/toolkit';
export const filterContacts = createAction('contacts/filter');

// import { FILTER_CONTACTS } from './filter-types';

// export const filterContacts = payload => {
//   return {
//     type: FILTER_CONTACTS,
//     payload,
//   };
// };
