import React from 'react'
import { useFormWithValidation } from '../../utils/FormValidator';
import CheckBoxFilter from '../CheckBoxFilter/CheckBoxFilter'
import { moviesApi } from '../../utils/MoviesApi'
import './SearchForm.css'
import { useLocation } from 'react-router-dom';

export default function SearchForm(props) {
    const { values, handleChange, isValid, setIsValid } = useFormWithValidation();
    const [checkboxStatus, setCheckboxStatus] = React.useState(false);
    const [request, setRequest] = React.useState('')
    const [disabled, setDisabled] = React.useState(false)

    const location = useLocation()

    React.useEffect(() => {
        if (location.pathname === '/movies' && localStorage.searchRequest) {
            const search = JSON.parse(localStorage.searchRequest).request

            if (search) {
                setRequest(search);
                setIsValid(true)
            }
        }
    }, [location.pathname])

    React.useEffect(() => {
        const disabled = !isValid;
        setDisabled(disabled);
    }, [isValid]);


    function handleRequestChange(e) {
        handleChange(e);
        setRequest(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (location.pathname === '/movies') {
            props.setIsMoviesLoading(true)
            const initialMovies = JSON.parse(localStorage.getItem('initialMovies'));

            localStorage.setItem('searchRequest', JSON.stringify({
                    checkBox: checkboxStatus,
                    request: values.movie
                }));
                props.onSubmit(initialMovies)
        }
        if (location.pathname === '/saved-movies') {
            props.onSubmit(values.movie, checkboxStatus)
        }
    }

    function handleChangeCheckboxStatus(event) {
        setCheckboxStatus(event.target.checked)
    }

    return (
        <div className='search-form'>
            <div className='search-form__box'>
                <form className='search-form__container' onSubmit={handleSubmit} noValidate>
                    <input
                        onChange={handleRequestChange}
                        name='movie'
                        className='search-form__input'
                        placeholder='Фильм'
                        type='text'
                        required
                        value={request || ''}
                    />
                    <button disabled={disabled} type='submit' className={`search-form__button ${disabled && 'search-form__button_disabled'}`}>Поиск</button>
                </form>
                <span className={`search-form__error`}>{!disabled ? '' : 'Введите ключевое слово'}</span>
                <CheckBoxFilter
                    checkboxStatus={checkboxStatus}
                    onChangeCheckbox={handleChangeCheckboxStatus}
                />
            </div>
        </div>
    )
}
