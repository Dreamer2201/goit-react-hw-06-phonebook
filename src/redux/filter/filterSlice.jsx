import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        filterNameContact(state, action) {
            state.filter = action.payload;         
        }
    }
});

export const { filterNameContact} = filterSlice.actions;
export default filterSlice.reducer;