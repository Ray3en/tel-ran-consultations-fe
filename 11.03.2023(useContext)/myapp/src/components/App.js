import './App.css'

import { useState } from "react"
import Main from "./Main"
import { Context } from "../context/context"



function App(){

    const [state, setState] = useState('State!')


    return(
        <div>
            <Context.Provider value={{state, setState}}>
                <div className="block">
                    <p className='item'>1</p>
                    <p className='item'>2</p>
                    <p className='item'>3</p>
                    <p className='item'>4</p>
                </div>
                <Main/>
            </Context.Provider>
        </div>
    )
}

export default App

