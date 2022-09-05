import { createAction } from '@reduxjs/toolkit';
import { generate } from 'shortid';
export const addContacts = createAction(
  'contacts/add',
  function prepare(payload) {
    return {
      payload: {
        id: generate(),
        payload,
      },
    };
  }
);
export const removeContacts = createAction('contacts/remove');

// import {
//   ADD_CONTACTS,
//   REMOVE_CONTACTS,

// } from './contacts-types';
// import { generate } from 'shortid';

// export const addContacts = payload => {
//   return {
//     type: ADD_CONTACTS,
//     payload: {
//       id: generate(),
//       ...payload,
//     },
//   };
// };

// export const removeContacts = payload => {
//   return {
//     type: REMOVE_CONTACTS,
//     payload,
//   };
// };
