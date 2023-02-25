import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


function Block(){
    let empl = useSelector(store => store.empl)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'ADD_EMPL', payload: 'Tigran'})
    },[])

    return(
        <div>
            <h3>Employees</h3>
            <div>
                {empl.map(elem => 
                    <div key={elem.id}>
                        <p>{elem.name}</p>
                    </div>
                )}
            </div>
            <button onClick={() => dispatch({type: 'ADD_EMPL', payload: prompt()})}>Добавить сотрудника</button>
        </div>
    )
}


export default Block