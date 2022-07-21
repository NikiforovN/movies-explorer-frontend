import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import './Menu.css'

export default function Menu(props) {
  return (
    <div className={`menu ${props.isMenuOpen && 'menu_opened'} `}>
      <div className='menu__box'>
        <Navbar isLoggedIn={props.isLoggedIn} isMenuOpen={props.isMenuOpen} toggleBurgerMenu={props.toggleBurgerMenu} />
      </div>
    </div>
  )
}
