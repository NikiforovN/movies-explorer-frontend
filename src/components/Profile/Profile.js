import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <section className='profile'>
            <h2 className='profile__title'>
                Привет, Медвед!
            </h2>
            <div className='profile__box'>
                <div className='profile__box-item'>
                    <p className='profile__box-item-title'>Имя</p>
                    <p className='profile__box-item-subtitle'>Медвед</p>
                </div>
                <div className='profile__box-item'>
                    <p className='profile__box-item-title'>E-mail</p>
                    <p className='profile__box-item-subtitle'>pochta@yandex.ru</p>
                </div>
            </div>
            <button type='button' className='profile__edit-button profile__buttons-hover'>Редактировать</button>
            <button type='button' className='profile__signout-button profile__buttons-hover'>Выйти из аккаунта</button>
        </section>
    )
}
