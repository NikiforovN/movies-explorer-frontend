import React from 'react'
import { Route } from 'react-router-dom'
import './Form.css'

export default function Form() {
    return (
        <form className='form' method='get'>
            <Route exact path='/signup'>
                <label className='form__input-label'>
                    <span className='form_input-label-title'>Имя</span>
                    <input
                        type='text'
                        className='form__input'
                        name='name'
                        placeholder='Введите ваше Имя'
                        required
                    />
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>E-mail</span>
                    <input
                        type='email'
                        className='form__input'
                        name='email'
                        placeholder='Введите email'
                        required
                    />
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>Пароль</span>
                    <input
                        type='password'
                        className='form__input'
                        name='password'
                        placeholder='Введите пароль'
                        required
                    />
                    <span className="form__input-error">Что-то пошло не так...</span>
                    <button type='submit' className='form__submit-button'>Зарегистрироваться</button>
                </label>
            </Route>
            <Route exact path='/signin'>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>E-mail</span>
                    <input
                        type='email'
                        className='form__input'
                        name='email'
                        placeholder='Введите email'
                        required
                    />
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>Пароль</span>
                    <input
                        type='password'
                        className='form__input'
                        name='password'
                        placeholder='Введите пароль'
                        required
                    />
                    <span class="form__input-error">Что-то пошло не так...</span>
                </label>
                <button type='submit' className='form__submit-button'>Войти</button>
            </Route>
        </form>
    )
}
