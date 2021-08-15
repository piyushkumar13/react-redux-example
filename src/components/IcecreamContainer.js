import {connect} from "react-redux";
import {buyIcecream} from "../redux";

const IcecreamContainer = (props) => {

    return (
        <>
            <div>
                <b>Number of Icecream : {props.numOfIcecream}</b>
                <button onClick={props.buyIcecream}>Buy Icecream</button>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.icecream.numOfIcecream
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)

