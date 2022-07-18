import React from 'react'
import CheckBoxFilter from '../CheckBoxFilter/CheckBoxFilter'
import './SearchForm.css'

export default function SearchForm() {
    return (
        <div className='search-form'>
            <div className='search-form__box'>
                <form className='search-form__container'>
                    <input className='search-form__input' placeholder='Фильм' type='text' required/>
                    <button type='submit' className='search-form__button'>Поиск</button>
                </form>
                <CheckBoxFilter />
            </div>
        </div>
    )
}
