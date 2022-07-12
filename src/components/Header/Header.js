import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import '../Header/Header.css'
import headerLogo from '../../images/header__logo.svg'
import accountLogo from '../../images/header__account-logo.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
    return (


        <Switch>
            <Route exact path='/'>
                <header className='header'>
                    <Link to='/'>
                        <img className='header__logo' src={headerLogo} alt='Логотип' />
                    </Link>
                    <div className='header__container'>
                        <Link to='/signup'>
                            <button className='header__button_signup'>Регистрация</button>
                        </Link>
                        <Link to='/signin'>
                            <button className='header__button_signin'>Войти</button>
                        </Link>
                    </div>
                </header>
            </Route>
            <Route exact path='/profile'>
                <header className='header header__background_profile'>
                    <Link to='/'>
                        <img className='header__logo' src={headerLogo} alt='Логотип' />
                    </Link>
                    <div className='header__container'>
                        <div className='header__container-item'>
                            <Link to='/movies'>
                                <button className='header__button_films'>Фильмы</button>
                            </Link>
                            <Link to='/saved-movies'>
                                <button className='header__button_films header__button_saved-films'>Сохраненные фильмы</button>
                            </Link>
                        </div>
                        <div className='header__container-item'>
                            <p className='header__account'>Аккаунт</p>
                           <div className='header__account-box'>
                           <img className='header__account-logo' src={accountLogo} alt='Логотип' />
                           </div>
                        </div>
                    </div>
                    <BurgerMenu/>
                </header>
            </Route>
        </Switch>




    )
}
