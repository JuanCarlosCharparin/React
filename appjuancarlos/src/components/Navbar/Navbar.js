import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="Cont">
                <h1 className="Titulo">Ecommerce Juan Carlos</h1>
            </div>
            <div className="Productos">
                <Link to='/category/Celulares' className="botones">Celulares</Link>
                <Link to='/category/Lavarropas' className="botones">Lavarropas</Link>
                <Link to='/category/Computadoras' className="botones">Computadoras</Link>
                <Link to='/category/ColumnasdeAudio' className="botones">Columnas de Audio</Link>
                <Link to='/category/Televisores' className="botones">Televisores</Link>
                <Link to='/category/Microondas' className="botones">Microondas</Link>
            </div>
            <div>
                <CardWidget num={'0'}/>
            </div>
        </nav>
    )
}

export default Navbar