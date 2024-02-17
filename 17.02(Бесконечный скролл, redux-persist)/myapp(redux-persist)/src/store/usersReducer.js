import { removeHelper } from "./helpers"


// чтение данных из LS (версия без библиотеки)
// лучше использовать библиотеку Persist
// const data = [
//     {id: 11, name: 'Alex Wilyam'},
//     {id: 12, name: 'Steven King'},
//     {id: 13, name: 'Neena Golfram'},
//     {id: 14, name: 'Peter Pan'},
// ]
// const defaultState = JSON.parse(localStorage.getItem('users')) ?? data

const defaultState = [
    {id: 11, name: 'Alex Wilyam'},
    {id: 12, name: 'Steven King'},
    {id: 13, name: 'Neena Golfram'},
    {id: 14, name: 'Peter Pan'},
]

const REMOVE_LAST_USER = 'REMOVE_LAST_USER'
const ADD_NEW_USER = 'ADD_NEW_USER'
const UPPER_NAME = 'UPPER_NAME'
const REMOVE_BY_ID = 'REMOVE_BY_ID'
const ASYNC_USER_LIST = 'ASYNC_USER_LIST'

export const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case REMOVE_LAST_USER:
            return state.slice(0,-1)
        case ADD_NEW_USER:
            let new_user = {
                id: Date.now(),
                name: action.payload
            }
            return [...state, new_user]
        case UPPER_NAME:
            return state.map(elem => {
                elem.name = elem.name.toUpperCase()
                return elem
            })
        case REMOVE_BY_ID:
            return removeHelper(state, action.payload)
        case ASYNC_USER_LIST:
            return [...state, ...action.payload]
        default: 
            return state
    }
}


export const removeLastUserAction = () => ({type: REMOVE_LAST_USER})
export const addNewUserAction = (payload) => ({type: ADD_NEW_USER, payload})
export const upperNameAction = () => ({type: UPPER_NAME})
export const removeByIdAction = (payload) => ({type: REMOVE_BY_ID, payload})
export const asyncUserListAction = (payload) => ({type: ASYNC_USER_LIST, payload})

