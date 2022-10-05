import { useState } from "react";

const Count = ( {stock, onAdd, initial} ) => {
   
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
        if (count == stock) {
            console.log("Stock no disponible")
        }
    }

    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    return <div className="cont">
                <div className="cont-operacion">
                    <button onClick={increment} className='botonMas'>+</button>
                    <h2 className="count">{count}</h2>
                    <button onClick={decrement} className='botonMenos'>-</button>
                </div>
                
                <button onClick={onAdd} className='botonAdd'>Agregar al carrito</button>
            </div>
    
}

export default Count