import InformationPlanets from "./InformationPlanets"
import Texts from "./Texts"

const planetsData = {
    earth : {
        name: "Earth",
        desc: "Earth is the third planet from the Sun and the only place in the universe known to harbor life. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem iopsum cadabra xulipa",
        source: "Wikipedia",
        //InformartionPlanets Component
        rotation: "0.99 days",
        revolution: "365 days",
        radius: "6,731km",
        temp: "16°C"
        //InformartionPlanets Component
    },

    mars : {
        name: "Mars",
        desc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem iopsum cadabra xulipa",
        source: "Wikipedia",
        //InformartionPlanets Component
        rotation: "1.03 days",
        revolution: "687 days",
        radius: "3,389km",
        temp: "16°C"
    }
    
}

function MainPlanets () {
    
    return (
        <div>
            <main>
                <figure className="MainPlanet">
                    <img id="PlanetImage" src="./src/assets/planet-earth.svg" alt="Planet Earth"/>
                </figure>
                
                <Texts 
                    name = {planetsData.earth.name}
                    desc = {planetsData.earth.desc}
                    source = {planetsData.earth.source}
                />
            
            </main>

            <section className="InformationPlanets">
                <ul>
                    <InformationPlanets
                    RotationTime = {planetsData.earth.rotation}
                    RevolutionTime= {planetsData.earth.revolution}
                    Radius= {planetsData.earth.radius}
                    Temp= {planetsData.earth.temp} />
                    
                </ul>
            </section>
        </div>

        
    )
}

export default MainPlanets

/* <h2 id="PlanetName">Earth</h2>
                <p id="DescriptionPlanet">
                    Earth is the third planet from the Sun and the only place in the universe known to harbor life. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem iopsum cadabra xulipa
                </p>
                <span className="LinkWikioedia">
                    Source: <a href="#">Wikipedia</a>
                </span> */