import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import CakeContainerWithHooks from "./components/CakeContainerWithHooks";
import IcecreamContainer from "./components/IcecreamContainer";
import IcecreamContainerWithHooks from "./components/IcecreamContainerWithHooks";
import InputForCake from "./components/InputForCake";
import ItemContainerMappersWithOwnProps from "./components/ItemContainerMappersWithOwnProps";
import UserContainerAsyncReduxExample from "./components/UserContainerAsyncReduxExample";

const App = () => {
    return (
        <>
            <h1>Example of Redux with React</h1>

            <Provider store={store}>
                <CakeContainer/>
                <CakeContainerWithHooks/>
                <InputForCake/>
                <hr/>
                <IcecreamContainer/>
                <IcecreamContainerWithHooks/>
                <hr/>
                <ItemContainerMappersWithOwnProps cake/>
                <ItemContainerMappersWithOwnProps icecream/>
                <hr/>
                <UserContainerAsyncReduxExample/>
            </Provider>
        </>
    );
};

export default App;