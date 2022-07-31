import React from 'react'
import { useFormWithValidation } from '../../utils/FormValidator';
import CheckBoxFilter from '../CheckBoxFilter/CheckBoxFilter'
import { moviesApi } from '../../utils/MoviesApi'
import './SearchForm.css'
import { useLocation } from 'react-router-dom';

export default function SearchForm(props) {
    const { values, handleChange, isValid } = useFormWithValidation();
    const [checkboxStatus, setCheckboxStatus] = React.useState(false);
    const [request, setRequest] = React.useState('')

    const location = useLocation()

    React.useEffect(()=>{
        if(location.pathname === '/movies'){
            setRequest(JSON.parse(localStorage.searchRequest).request)
            setCheckboxStatus(JSON.parse(localStorage.searchRequest).checkBox)
        }
    },[location.pathname])

    function handleSubmit(event) {
        event.preventDefault()
        if (location.pathname === '/movies') {
            props.setIsMoviesLoading(true)
            moviesApi.getMovies()
                .then((moviesFromApi) => {
                    localStorage.setItem('searchRequest', JSON.stringify({
                        checkBox: checkboxStatus,
                        request: values.movie,
                        movies: moviesFromApi,
                    }));
                    props.onSubmit(moviesFromApi)
                })
                .catch((err) => console.log(err))
                .finally(() => props.setIsMoviesLoading(false))
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
                    <input onChange={handleChange} name='movie' className='search-form__input' placeholder='Фильм' type='text' required defaultValue={request || ''} />
                    <button disabled={!isValid} type='submit' className={`search-form__button ${!isValid && 'search-form__button_disabled'}`}>Поиск</button>
                </form>
                <span className={`search-form__error`}>{!isValid ? 'Введите ключевое слово' : ''}</span>
                <CheckBoxFilter
                    checkboxStatus={checkboxStatus}
                    onChangeCheckbox={handleChangeCheckboxStatus}
                />
            </div>
        </div>
    )
}
