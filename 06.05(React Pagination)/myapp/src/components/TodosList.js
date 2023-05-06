

function TodosList(props){

    const {todos} = props

    return(
        <div>
            <ul>
                {todos.map(elem => 
                    <li key={elem.id}>
                        {elem.title} {elem.id}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default TodosList