import { useDispatch, useSelector } from "react-redux"
import { initCapAction, lowerAction, setStringAction, upperAction } from "../store/stringReducer"


function StringState(){

    const string = useSelector(store => store.string)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>String</h2>
            <h3>{string}</h3>
            <div>
                <button onClick={() => dispatch(upperAction())}>Upper</button>
                <button onClick={() => dispatch(lowerAction())}>Lower</button>
                <button onClick={() => dispatch(setStringAction(prompt()))}>Set string</button>
                <button onClick={() => dispatch(initCapAction())}>Init Cap</button>
            </div>
        </div>
    )
}


export default StringState