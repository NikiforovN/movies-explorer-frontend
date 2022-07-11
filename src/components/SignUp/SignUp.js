import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import './SignUp.css'
import logo from '../../images/header__logo.svg'

export default function SignUp() {
    return (
        <div className='signup'>
            <div className='signup__container'>
            <Link to='/' className='signup__logo'>
            <img src={logo} alt='Логотип' />
            </Link>
            <h1 className='signup__title'>Добро пожаловать!</h1>
            <Form />
            <div className='signup__box'>
                <p className='signup__text'>Уже зарегистрированы?</p>
                <Link className='signup__link' to='/signin'>
                    Войти
                </Link>
            </div>
            </div>
        </div>
    )
}
