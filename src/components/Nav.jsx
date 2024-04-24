

function NavBar ({onChangeIMG, showGeology}) {
    const handleClick = () => {
        showGeology();
      };
    return (
        <nav className="NavBar">
            <>
                <li onClick={() => onChangeIMG('overview')} id="Overview">Overview</li>
                <li onClick={() => onChangeIMG('structure')} id="Structure">Structure</li>
                <li onClick={() => {onChangeIMG('geology'); handleClick();}}id="Geology">Geology</li>
            </>
        </nav>
    )
}

export default NavBar