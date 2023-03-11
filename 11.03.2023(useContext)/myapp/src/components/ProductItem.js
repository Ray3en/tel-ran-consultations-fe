import { useContext } from "react"
import { Context } from "../context/context"

function ProductItem(){

    const {state, setState} = useContext(Context)


    function handle(){
        setState('setState!')
    }

    return(
        <div>
            <p>Product Item!</p>
            <p>{state}</p>
            <button onClick={handle}>Click!</button>
        </div>
    )
}

export default ProductItem