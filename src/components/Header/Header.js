import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import '../Header/Header.css'
import headerLogo from '../../images/header__logo.svg'

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
        </Switch>




    )
}
