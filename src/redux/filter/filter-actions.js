import { SET_FILTER } from "./filter-types";

const filterListContact = payload => {
    return {
        type: SET_FILTER,
        payload,
    }
}

export { filterListContact };