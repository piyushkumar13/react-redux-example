import {buyCake} from "../redux";
import {useDispatch, useSelector} from "react-redux";

const CakeContainerWithHooks = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <b>Number of cakes(using hooks) : {numOfCakes}</b>
                <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
            </div>
        </>
    );
}


export default CakeContainerWithHooks;
