import InformationPlanets from "./InformationPlanets"


function MainPlanets () {
    return (
        <div>
            <main>
                <figure className="MainPlanet">
                    <img id="PlanetImage" src="./src/assets/planet-earth.svg" alt="Planet Earth"/>
                </figure>
                <h2 id="PlanetName">Earth</h2>
                <p id="DescriptionPlanet">
                    Earth is the third planet from the Sun and the only place in the universe known to harbor life. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem iopsum cadabra xulipa
                </p>
                <span className="LinkWikioedia">
                    Source: <a href="#">Wikipedia</a>
                </span>
            
            </main>

            <section className="InformationPlanets">
                <ul>

                    <InformationPlanets
                    RotationTime = "0.99 days"
                    RevolutionTime= "365 days"
                    Radius= "6,731km" 
                    Temp= "16°C"/>
                    
                </ul>
            </section>
        </div>

        
    )
}

export default MainPlanets