import { useDispatch, useSelector } from "react-redux"
import { addNewUserAction, removeByIdAction, removeLastUserAction, upperNameAction } from "../store/usersReducer"
import { fetchUserList } from "../asyncActions/users"
import { useEffect } from "react"


function Users(){
    const users = useSelector(store => store.users)
    const dispatch = useDispatch()

    // useEffect позволяет выполнить (задиспатчить) сетевой запрос после монтирования компонента
    // useEffect(() => {
    //     dispatch(fetchUserList())
    //     dispatch(fetchProductList())
    // }, [])

    // сохранение данных в LS (версия без библиотеки)
    // лучше использовать библиотеку Persist
    // useEffect(() => {
    //     localStorage.setItem('users', JSON.stringify(users))
    // }, [users])

    return(
        <div>
            <h2>Users</h2>
            <div>
                <button onClick={() => dispatch(removeLastUserAction())}>Delete last users</button>
                <button onClick={() => dispatch(addNewUserAction(prompt()))}>Add new user</button>
                <button onClick={() => dispatch(upperNameAction())}>Upper name</button>
                <button onClick={() => dispatch(fetchUserList())}>ASYNC User list</button>
            </div>
            <ul>
                {users.map(elem => 
                    <li key={elem.id} onDoubleClick={() => dispatch(removeByIdAction(elem.id))}>
                        {elem.name}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Users