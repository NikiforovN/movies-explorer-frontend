import React from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import './Navbar.css'
import accountLogo from '../../images/header__account-logo.svg'

export default function Navbar(props) {
    return (
        <>
            <Route exact path='/'>
                {
                    props.isLoggedIn ?
                        <>
                            <nav className='navbar__container navbar__container_tablet'>
                                <div className='navbar__container-item navbar__container-item_tablet'>
                                    <NavLink
                                        to='/'
                                        className='navbar__button_films navbar__button_films_display-none navbar__buttons-hover'
                                        activeClassName="navbar__button_active"
                                        onClick={props.toggleBurgerMenu}
                                    >
                                        Главная
                                    </NavLink>
                                    <NavLink
                                        to='/movies'
                                        className='navbar__button_films navbar__buttons-hover'
                                        activeClassName="navbar__button_active"
                                        onClick={props.toggleBurgerMenu}
                                    >
                                        Фильмы
                                    </NavLink>
                                    <NavLink
                                        to='/saved-movies'
                                        className='navbar__button_films navbar__button_saved-films navbar__buttons-hover'
                                        activeClassName="navbar__button_active"
                                        onClick={props.toggleBurgerMenu}
                                    >
                                        Сохраненные фильмы
                                    </NavLink>
                                </div>
                                <NavLink
                                    to='/profile'
                                    className='navbar__container-item navbar__container-item_tablet navbar__container-item_profile-link navbar__buttons-hover'
                                    activeClassName="navbar__button_active"
                                    onClick={props.toggleBurgerMenu}
                                >
                                    <p className='navbar__account'>Аккаунт</p>
                                    <div className='navbar__account-box'>
                                        <img className='navbar__account-logo' src={accountLogo} alt='Логотип' />
                                    </div>
                                </NavLink>
                            </nav>
                        </>
                        :
                        <>
                            <nav className='navbar__container'>
                                <Link to='/signup'>
                                    <button type='button' className='navbar__button_signup navbar__buttons-hover'>Регистрация</button>
                                </Link>
                                <Link to='/signin'>
                                    <button type='button' className='navbar__button_signin navbar__buttons-hover'>Войти</button>
                                </Link>
                            </nav>
                        </>
                }

            </Route>
            <Route path='/(profile|movies|saved-movies)'>
                <nav className='navbar__container navbar__container_tablet'>
                    <div className='navbar__container-item navbar__container-item_tablet'>
                        <Link to='/' className='navbar__button_films navbar__button_films_display-none navbar__buttons-hover' onClick={props.toggleBurgerMenu}>
                            Главная
                        </Link>
                        <NavLink to='/movies' className='navbar__button_films navbar__buttons-hover' activeClassName="navbar__button_active" onClick={props.toggleBurgerMenu}>
                            Фильмы
                        </NavLink>
                        <NavLink to='/saved-movies' className='navbar__button_films navbar__button_saved-films navbar__buttons-hover' activeClassName="navbar__button_active" onClick={props.toggleBurgerMenu}>
                            Сохраненные фильмы
                        </NavLink>
                    </div>
                    <NavLink to='/profile' className='navbar__container-item navbar__container-item_tablet navbar__container-item_profile-link navbar__buttons-hover' activeClassName="navbar__button_active" onClick={props.toggleBurgerMenu}>
                        <p className='navbar__account'>Аккаунт</p>
                        <div className='navbar__account-box'>
                            <img className='navbar__account-logo' src={accountLogo} alt='Логотип' />
                        </div>
                    </NavLink>
                </nav>
            </Route>
        </>
    )
}
