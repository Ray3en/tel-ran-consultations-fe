import { asyncUserListAction } from "../store/usersReducer"

export function fetchUserList(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(asyncUserListAction(data)))
    }
}

// Пример с аргументами (понадобиться для id или post-запросов)
export function FetchById(id){
    return function(dispatch){
        fetch('https://exemple.com/users/'+id)
            .then(res => res.json())
            .then(data => dispatch(asyncUserListAction(data)))
    }
}
