import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import './SignIn.css'
import logo from '../../images/header__logo.svg'

export default function SignIn() {
  return (
    <div className='signin'>
      <div className='signin__container'>
        <Link to='/' className='signin__logo'>
          <img src={logo} alt='Логотип' />
        </Link>
        <h1 className='signin__title'>Рады видеть!</h1>
        <Form />
        <div className='signin__box'>
          <p className='signin__text'>Ещё не зарегистрированы?</p>
          <Link className='signin__link' to='/signup'>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}
