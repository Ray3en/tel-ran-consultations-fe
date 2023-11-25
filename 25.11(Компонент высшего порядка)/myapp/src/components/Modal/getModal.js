import { useEffect, useState } from "react"



export const getModal = (color) => {
    const Modal = ({text}) => {

        const [count, setCount] = useState(0)

        useEffect(() => {
            console.log('Монтирование!')
        },[])
        
        return (
            <div style={{padding: '20px', border: '25px', backgroundColor: color}}>
                <h1>Modal</h1>
                <p>{text}</p>
                <div>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        )
    }
    return Modal
}