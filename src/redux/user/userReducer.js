import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ""
};

export const userReducer = (prevState = initialState, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            return {
                ...prevState,
                loading: true
            };

        case FETCH_USER_SUCCESS:
            return {
                ...prevState,
                loading: false,
                users: action.payload
            }

        case FETCH_USER_FAILURE:
            return {
                ...prevState,
                loading: false,
                error: action.payload
            };

        default:
            return prevState;
    }
};

