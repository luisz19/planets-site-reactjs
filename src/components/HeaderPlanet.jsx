import Nav from './Nav'
import ButtonMenu from './ButtonMenu'

function HeaderPlanet () {
    return(
        <div>
            <header className="HeaderPlanet">
                <h1>The planets</h1>
                <ButtonMenu/>
            </header>
            <Nav />
        </div>
    )
}

export default HeaderPlanet