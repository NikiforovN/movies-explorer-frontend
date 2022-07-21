import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import { useFormWithValidation } from '../../utils/FormValidator';
import './Form.css'

export default function Form(props) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();


    React.useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);


    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(values)
    }
    return (
        <form className='form' method='get' onSubmit={handleSubmit}>
            <Route exact path='/signup'>
                <label className='form__input-label'>
                    <span className='form_input-label-title'>Имя</span>
                    <input
                        type='text'
                        className='form__input'
                        name='name'
                        placeholder='Введите ваше Имя'
                        required
                        onChange={handleChange}
                    />
                    <span className="form__input-error">{errors.name || ''}</span>
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>E-mail</span>
                    <input
                        type='email'
                        className='form__input'
                        name='email'
                        placeholder='Введите email'
                        required
                        onChange={handleChange}
                    />
                    <span className="form__input-error">{errors.email || ''}</span>
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>Пароль</span>
                    <input
                        type='password'
                        className='form__input'
                        name='password'
                        placeholder='Введите пароль'
                        required
                        onChange={handleChange}
                    />
                    <span className="form__input-error">{errors.password || ''}</span>
                    <button disabled={!isValid} type='submit' className={`form__submit-button ${!isValid && 'form__submit-button-disabled'}`}>Зарегистрироваться</button>
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
                        onChange={handleChange}
                    />
                    <span className="form__input-error">{errors.email || ''}</span>
                </label>

                <label className='form__input-label'>
                    <span className='form_input-label-title'>Пароль</span>
                    <input
                        type='password'
                        className='form__input'
                        name='password'
                        placeholder='Введите пароль'
                        required
                        onChange={handleChange}
                    />
                    <span class="form__input-error">{errors.password || ''}</span>
                </label>
                <button disabled={!isValid} type='submit' className={`form__submit-button ${!isValid && 'form__submit-button-disabled'}`}>Войти</button>
            </Route>
        </form>
    )
}
