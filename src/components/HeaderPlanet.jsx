
import ButtonMenu from './ButtonMenu'
import Menu from './Menu'
import { useState } from 'react'

function HeaderPlanet () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => { //alternar
        setIsMenuOpen(!isMenuOpen); // Alterna entre true e false
    };

    return(
        <div>
            <header className="HeaderPlanet">
                <h1>The planets</h1>
                <ButtonMenu toggleMenu={toggleMenu} />
                <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </header>
            
        </div>
    )
}

export default HeaderPlanet