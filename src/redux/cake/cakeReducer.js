import {BUY_CAKE} from "./cakeTypes";

const initialState = {
    numOfCakes: 10
};

export const cakeReducer = (prevState = initialState, action) => {

    switch (action.type){

        case BUY_CAKE:
            return{
                numOfCakes: prevState.numOfCakes - action.payload
            };

        default:
            return prevState;
    }
};