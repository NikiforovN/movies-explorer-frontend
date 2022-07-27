import React from 'react'
import './CheckBoxFilter.css'

export default function CheckBoxFilter(props) {
    return (
        <div className='checkbox'>
            <label className='checkbox__label'>
                <input
                    type='checkbox'
                    checked={props.checkboxStatus}
                    onChange={props.onChangeCheckbox} />
                <span className='checkbox__slider'></span>
            </label>
            <p className='checkbox__title'>Короткометражки</p>
        </div>
    )
}
