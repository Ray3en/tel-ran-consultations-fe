import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction, resetAction } from "../store/countReducer"


function Count(){

    // useSelector позволяет получить состояние из хранилища
    // Само состояние можно получить в любом компоненте
    const count = useSelector(store => store.count)

    // useDispatch - хук, иницализарующий диспатч для отправки 
    // в редьюсер типа операции, который необходимо выполнить над хранилищем
    const dispatch = useDispatch()

    // Сделайте еще две кнопки, которые будут инкрементировать/деккременитровать состояние на 100
    // Cделайте кнопку, которая будет обнулять состояние (0)

    // сделать еще 1 кнопку, которая будет получать n число, на которое нужно будет икнрементировать состояние
    return(
        <div>
            <h2>Count</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={() => dispatch(incrAction(1))}>Increment</button>
                <button onClick={() => dispatch(decrAction(1))}>Decrement</button>
                <button onClick={() => dispatch(incrAction(100))}>Increment 100</button>
                <button onClick={() => dispatch(decrAction(100))}>Decrement 100</button>
                <button onClick={() => dispatch(resetAction())}>Reset</button>
                <button onClick={() => dispatch(incrAction(+prompt()))}>Incr By N</button>
            </div>
        </div>
    )
}

export default Count