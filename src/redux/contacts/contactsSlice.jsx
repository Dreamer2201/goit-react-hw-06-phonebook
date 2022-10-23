import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {
            console.log(state);
            console.log(action);
            state.contacts.push({
                id: nanoid(),
                ...action.payload,
            })
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id)
        }
    }
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
