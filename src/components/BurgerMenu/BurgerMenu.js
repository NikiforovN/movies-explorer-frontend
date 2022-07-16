import React from 'react'
import './BurgerMenu.css'

export default function BurgerMenu(props) {

    return (
        <div className={`burger-menu ${props.isMenuOpen && 'burger-menu_active'}`} onClick={props.toggleBurgerMenu} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
