import { Link } from "react-router-dom"

const ItemList = ({ products }) => {
    return (
        <div>
            { products.map(product => (
                <div key={product.id}>
                    <h1 key={product.id}>{product.name}</h1>
                    <h2>$ {product.price}</h2>
                    <Link to={`/detail/${product.id}`}>Ver detalle</Link>
                </div>
            ))
            }


            
        </div>
    )
}

export default ItemList