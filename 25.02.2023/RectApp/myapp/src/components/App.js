import { useDispatch, useSelector } from "react-redux"
import Block from "./Block"



function App(){
    let count = useSelector(store => store.count)
    let dispatch = useDispatch()

    return(
        <div>
            {count}
            <div>
                <button onClick={() => dispatch({type: 'INCR', payload: +prompt()})}>Инкремент</button>
                <button onClick={() => dispatch({type: 'DECR', payload: +prompt()})} >Декремент</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
            </div>
            <Block/>
        </div>
    )
}


export default App