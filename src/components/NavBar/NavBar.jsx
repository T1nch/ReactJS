function NavBar (){
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <h3>Logo Mi Tienda </h3>
                    </a>
                </li>
                <li>
                    <h2>ANSWER HARD</h2>
                </li>
                <li>
                    <a href="/">Impresoras</a>
                </li>
                <li>
                    <a href="/">Balanzas</a>
                </li>
                <li>
                    <a href="/">Discos de almacenamiento</a>
                </li>
                <li>
                    <a href="/">Cartuchos</a>
                </li>
            </ul>
            {/* <CartWidget></CartWidget> */}
            <h2><span>🛒</span></h2>
            <span></span>
        </nav>
    )
}

export default NavBar;