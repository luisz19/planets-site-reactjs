

// Source: <a href="#">Wikipedia</a>

function Texts ({name, desc, source}) {
   
    return(
        <>
            <h2 id="PlanetName">{name}</h2>
            <p id="DescriptionPlanet">{desc}</p>
            <span className="LinkWikioedia">Source: <a href="#">{source}</a></span>
        </>
    )
}
export default Texts;
