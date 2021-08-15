import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";

const InputForCake = () => {

    const [cakes, setCakes] = useState(0);
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <b>Numbe of cakes(with Input example) : {numOfCakes}</b>
                <input type="text" value={cakes} onChange={(event) => setCakes(event.target.value)}/>
                <button onClick={() => dispatch(buyCake(cakes))}>Buy {cakes} cakes</button>
            </div>
        </>
    );
};

export default InputForCake;