import ButtonMenu from "./ButtonMenu"


function Menu ({ isMenuOpen, toggleMenu }){
    return (
        <nav className={`MenuNav ${isMenuOpen ? 'open' : ''}`}> 
        
            <ul>
                <li className="btnColumn">Planets < ButtonMenu toggleMenu={toggleMenu} />  </li>
                <li><a href="#">Earth</a></li>
                <li><a href="#">Mars</a></li>
                <li><a href="#">Venus</a></li>
                <li><a href="#">Jupiter</a></li>
                <li><a href="#">Saturn</a></li>
                <li><a href="#">Mercury</a></li>
                <li><a href="#">Neptune</a></li>
                <li><a href="#">Uranus</a></li>
            </ul>
        </nav>
    )
}

export default Menu