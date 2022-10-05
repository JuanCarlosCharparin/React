import { useState, useEffect } from "react"
import { getProducts } from "../../asynckMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    

    if(loading) {
        return <h1>Loading...</h1>
    }
    

    if(error) {
        return <h1>Hubo un error</h1>
    }
    
    return (
        <div className="ItemListContainer">
            <h1>Todos los productos</h1>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer