import React from 'react'
import './BurgerMenu.css'

export default function BurgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleBurgerMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={`burger-menu ${isMenuOpen && 'burger-menu_active'}`} onClick={toggleBurgerMenu} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
