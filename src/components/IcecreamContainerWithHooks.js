import {useDispatch, useSelector} from "react-redux";
import {buyIcecream} from "../redux";

const IcecreamContainerWithHooks = () => {

    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <b>Number of Icecream(using hooks) : {numOfIcecream}</b>
                <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
            </div>
        </>
    );
};

export default IcecreamContainerWithHooks

