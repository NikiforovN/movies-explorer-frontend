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
                        <button className='navbar__button_signup navbar__buttons-hover'>Регистрация</button>
                    </Link>
                    <Link to='/signin'>
                        <button className='navbar__button_signin navbar__buttons-hover'>Войти</button>
                    </Link>
                </nav>
            </Route>
            <Route path='/(profile|movies|saved-movies)'>
                <nav className='navbar__container navbar__container_tablet'>
                    <div className='navbar__container-item navbar__container-item_tablet'>
                        <Link to='/' className='navbar__button_films navbar__button_films_display-none navbar__buttons-hover'>
                            Главная
                        </Link>
                        <NavLink to='/movies' className='navbar__button_films navbar__buttons-hover' activeClassName="navbar__button_active">
                            Фильмы
                        </NavLink>
                        <NavLink to='/saved-movies' className='navbar__button_films navbar__button_saved-films navbar__buttons-hover' activeClassName="navbar__button_active">
                            Сохраненные фильмы
                        </NavLink>
                    </div>
                    <Link to='/profile' className='navbar__container-item navbar__container-item_tablet navbar__container-item_profile-link navbar__buttons-hover'>
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
