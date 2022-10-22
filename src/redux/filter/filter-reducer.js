
import { SET_FILTER } from './filter-types';

const initialState = {
    filter: '',
};

const filterReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: 
            return { ...store, filter: action.payload }
        default:
            return store;
    }
}

export default filterReducer;