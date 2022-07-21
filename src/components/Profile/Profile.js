import React from 'react'
import { CurrentUser } from '../../context/CurrentUserContext'
import { useFormWithValidation } from '../../utils/FormValidator'
import './Profile.css'

export default function Profile(props) {
    const currentUser = React.useContext(CurrentUser)

    const { values, setValues, handleChange, setIsValid, errors, setErrors, isValid } = useFormWithValidation()

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        })
    }, [currentUser])

    const handleInputChange = (event) => {
        if (event.target.value === currentUser.name || event.target.value === currentUser.email) {
            setIsValid(false)
            setErrors({
                [event.target.name]: 'Данные должны отличаться от текущих'
            })
        }
        else {
            handleChange(event)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(values)
    }

    return (
        <section className='profile'>
            <h2 className='profile__title'>
                Привет, {currentUser.name}!
            </h2>
            <form className='profile__box' method='patch' noValidate onSubmit={handleSubmit}>
                <div className='profile__container'>
                    <label className='profile__box-item'>
                        <span className='profile__box-item-title'>Имя</span>
                        <input name="name" type='text' className='profile__box-item-input' defaultValue={currentUser.name} onChange={handleInputChange} required />
                    </label>
                    <span className="profile__input-error">{errors.name || ''}</span>
                </div>

                <div className='profile__container'>
                    <label className='profile__box-item'>
                        <p className='profile__box-item-title'>E-mail</p>
                        <input name="email" type='email' className='profile__box-item-input' defaultValue={currentUser.email} onChange={handleInputChange} required />
                    </label>
                    <span className="profile__input-error">{errors.name || ''}</span>
                </div>
                <button disabled={!isValid} type='submit' className={`profile__edit-button profile__buttons-hover${!isValid && 'profile__edit-button-disabled'}`}>Редактировать</button>
            </form>
            <button type='button' onClick={props.handleSignOut} className='profile__signout-button profile__buttons-hover'>Выйти из аккаунта</button>
        </section>
    )
}
