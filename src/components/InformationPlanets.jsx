function InformationPlanets({RotationTime, RevolutionTime, Radius, Temp}) {
    return (

            <>
                <li>
                    Rotation Time 
                    <span>{RotationTime}</span>
                </li>
                <li>
                    Revolution Time 
                    <span>{RevolutionTime}</span>
                </li>
                <li>
                    Radius 
                    <span>{Radius}</span>
                </li>
                <li>
                    Average Temp.
                    <span>{Temp}</span>
                </li>
            </>
    )
}

export default InformationPlanets;