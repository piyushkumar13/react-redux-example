import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {

    return {
        type: FETCH_USER_REQUEST
    };
};

export const fetchUserSuccess = (users) => {

    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
};

export const fetchUserFailed = (errorMsg) => {

    return {
        type: FETCH_USER_FAILURE,
        payload: errorMsg
    }
};

export const fetchUsers = () => {

    return function (dispatch) {
        dispatch(fetchUserRequest());

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                dispatch(fetchUserSuccess(response.data.map(user => {
                    return {
                        id: user.id,
                        title: user.title
                    }
                })));
            })
            .catch(error => {
                dispatch(fetchUserFailed(error.message));
            });
    };
}