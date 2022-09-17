const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="Cont">
                <h1 className="Titulo">Ecommerce Juan Carlos</h1>
            </div>
            <div className="Productos">
                <button className="botones">Celulares</button>
                <button className="botones">Lavarropas</button>
                <button className="botones">Computadoras</button>
                <button className="botones">Columnas de Audio</button>
                <button className="botones">Televisores</button>
                <button className="botones">Microondas</button>
            </div>
        </nav>
    )
}

export default Navbar