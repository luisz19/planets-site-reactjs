import { useState } from "react";

function ImgPlanets ({structureIMG, display}) {

    

    let imagePath = "./src/assets/planet-earth.svg"

    if (structureIMG === 'structure') {
        imagePath = './src/assets/planet-earth-internal.svg'
        display =  'none'

    } else if(structureIMG === "overview") {
        imagePath = './src/assets/planet-earth.svg'
        display =  'none'
    } else {
        imagePath = './src/assets/planet-earth.svg'
        
    }
    return (
        <>
             <figure className="MainPlanet">
                <img id="PlanetImage" src={imagePath} alt="#"/>
    
            </figure>
        
            <figure className="MainPlanet" >
                <img style={{ display }} className="geologyPlanet" src="./src/assets/geology-earth.png" alt="" />
            </figure>
          
            
        </>

    
    )
}

export default ImgPlanets