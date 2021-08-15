import React from 'react';
import {buyCake, buyIcecream} from "../redux";
import {connect} from "react-redux";

const ItemContainerMappersWithOwnProps = (props) => {
    return (
        <>
            <div>
                <b>Number of Items : {props.numOfItems}</b>
                <button onClick={props.buyItem}>Buy Item</button>
            </div>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {

    const numOfItems = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecream;

    return {
        numOfItems: numOfItems
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    /**
     *  Here, ownProps will be in form :
     *  {icecream: true} or {cake: true} depending on the props being sent at the usage of the component.
     *  */

    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());

    return {
        buyItem: dispatchFunction
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainerMappersWithOwnProps);