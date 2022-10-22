import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (newContact) => {
    return {
        payload: {
            id: nanoid(),
            ...newContact,
        }
    }
})
const removeContact = createAction('contacts/remove');

export { addContact, removeContact };