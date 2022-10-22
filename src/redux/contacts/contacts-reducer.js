import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contacts-actions';
const initialState = {
    contacts: [],
};

const contactsReducer = createReducer(initialState, {
    [addContact.type]: (store, { payload }) => {
        store.push(payload);
    },
    [removeContact.type]: (store, { payload }) => {
        store.filter(({ id }) => id !== payload);
    }
})
// const contactsReducer = (store = initialState, action) => {
//     switch (action.type) {
//         case ADD_CONTACT: 
//             const newContacts = [...store.contacts, action.payload];
//             return {
//                 contacts: newContacts,
//                 ...store,
//             }
//         case REMOVE_CONTACT:
//             const shotContacts = store.contacts.filter((contact) => contact.id !== action.payload);
//             return {
//                 contacts: shotContacts,
//                 ...store,
//             }
//         default:
//             return store;
//     }
// }

export default contactsReducer;