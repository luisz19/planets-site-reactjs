function ButtonMenu ({toggleMenu}) { //recebe o props de acordo com o evento em header ou menu
    return (
        <>
            <button className="ButtonMenu" onClick={toggleMenu}><img src="../src/assets/icon-hamburger.svg" alt="" /></button>
        </>
    )

}

export default ButtonMenu