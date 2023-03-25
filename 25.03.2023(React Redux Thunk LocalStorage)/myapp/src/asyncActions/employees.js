

export const fetchEmployees = () => {
    return function(dispatch){
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: 'ADD_ASYNC_EMPL', payload: data}) )
    }
}