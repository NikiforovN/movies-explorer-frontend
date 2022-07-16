import React from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import './Navbar.css'
import accountLogo from '../../images/header__account-logo.svg'

export default function Navbar() {
    return (
        <>
            <Route exact path='/'>
                <nav className='navbar__container'>
                    <Link to='/signup'>
                        <button className='navbar__button_signup'>Регистрация</button>
                    </Link>
                    <Link to='/signin'>
                        <button className='navbar__button_signin'>Войти</button>
                    </Link>
                </nav>
            </Route>
            <Route path='/(profile|movies|saves-movies)'>
                <nav className='navbar__container navbar__container_tablet'>
                    <div className='navbar__container-item navbar__container-item_tablet'>
                        <Link to='/' className='navbar__button_films navbar__button_films_display-none'>
                            Главная
                        </Link>
                        <NavLink to='/movies' className='navbar__button_films'  activeClassName="navbar__button_active">
                            Фильмы
                        </NavLink>
                        <NavLink to='/saved-movies' className='navbar__button_films navbar__button_saved-films' activeClassName="navbar__button_active">
                            Сохраненные фильмы
                        </NavLink>
                    </div>
                    <Link to='/profile' className='navbar__container-item navbar__container-item_tablet navbar__container-item_profile-link'>
                        <p className='navbar__account'>Аккаунт</p>
                        <div className='navbar__account-box'>
                            <img className='navbar__account-logo' src={accountLogo} alt='Логотип' />
                        </div>
                    </Link>
                </nav>
            </Route>
        </>
    )
}
