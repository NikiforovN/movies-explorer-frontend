import React from 'react'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile'>
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
        <button className='profile__edit-button'>Редактировать</button>
        <button className='profile__signout-button'>Выйти из аккаунта</button>
    </div>
  )
}
