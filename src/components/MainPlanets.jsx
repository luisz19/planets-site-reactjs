import InformationPlanets from "./InformationPlanets"
import Texts from "./Texts"
import ImgPlanets from "./ImgPlanets"
import { useState } from "react"
import Nav from './Nav'

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
    const [structurePlanet, setStructurePlanet] = useState('overview') //funçoes botões da nav

    const changeStructure = (structureIMG) => {
        setStructurePlanet(structureIMG)
    }

    const [displayGeology, setDisplayGeology] = useState(true);

    const showGeology = () => {
        setDisplayGeology(!displayGeology);
    };

    return (
        <div>
             <Nav onChangeIMG={changeStructure} showGeology={showGeology}/>
            <main>
                <ImgPlanets structureIMG={structurePlanet} display={displayGeology ? 'block' : 'none'}/>
                
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

