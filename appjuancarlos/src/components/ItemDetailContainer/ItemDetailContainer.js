import { useState, useEffect } from "react"
import { getProduct } from "../../asynckMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId }= useParams()
    
    

    useEffect(() => {
        getProduct(productId).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(products)

    if (loading) {
        <h1>Loading...</h1>
    }

    return <div>
                <h1>Detalle del producto</h1>
                <div>
                    <h1>{products.name}</h1>
                    <h2>{products.category}</h2>
                    <h2>${products.price}</h2>
                </div>
            </div>

}

export default ItemDetailContainer