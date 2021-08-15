import {BUY_ICECREAM} from "./icecreamTypes";

const initialState = {
    numOfIcecream: 10
};

export const icecreamReducer = (prevState = initialState, action) => {

    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfIcecream: prevState.numOfIcecream - 1
            };

        default:
            return prevState;
    }
}