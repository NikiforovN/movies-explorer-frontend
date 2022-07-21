import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import '../Header/Header.css'
import headerLogo from '../../images/header__logo.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navbar from '../NavBar/Navbar';

export default function Header(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <header className='header'>
                    <Link to='/'>
                        <img className='header__logo' src={headerLogo} alt='Логотип' />
                    </Link>
                    <div className={`header__container ${props.isLoggedIn && 'header__container-none'}`}>
                        <Navbar isLoggedIn={props.isLoggedIn}/>
                    </div>
                   { props.isLoggedIn && <BurgerMenu isMenuOpen={props.isMenuOpen} toggleBurgerMenu={props.toggleBurgerMenu} />}
                </header>
            </Route>
            <Route exact path='/(profile|movies|saved-movies)'>
                <header className='header header__background_profile'>
                    <Link to='/'>
                        <img className='header__logo' src={headerLogo} alt='Логотип' />
                    </Link>
                    <div className={`header__container ${props.isLoggedIn && 'header__container-none'}`}>
                        <Navbar />
                    </div>
                    <BurgerMenu isMenuOpen={props.isMenuOpen} toggleBurgerMenu={props.toggleBurgerMenu} />
                </header>
            </Route>
        </Switch>
    )
}
