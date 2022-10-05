import { useState } from "react"

const Counter  = () => {
    const initial = 0
    const [counter, setCounter] = useState(initial)

    const decrement = () => {
        setCounter(counter - 1)
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(initial)
    }

    return <div>
                <button onClick={decrement}>Restar</button>
                <h1>{counter}</h1>
                <button onClick={increment}>Sumar</button>
                <button onClick={reset}>Reset</button>

            </div>
} 

export default Counter