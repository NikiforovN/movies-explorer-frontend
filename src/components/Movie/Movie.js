import React from 'react'
import './Movie.css'
import movieImage from '../../images/movie.jpg';
import like from '../../images/icon__like.svg'
import dislike from '../../images/icon__dislike.svg'
import cross from '../../images/icon__cross.svg'
import { Route } from 'react-router-dom';

export default function Movie({movie}) {
    const MOVIES_URL = 'https://api.nomoreparties.co'
    const [isLiked, setIsliked] = React.useState(false);
    function handleLike() {
        setIsliked(!isLiked)
    }
    function handleDuration(duration){
        const hour = Math.trunc(duration/60);
        const minutes = duration % 60
        return hour + 'ч' + minutes + 'м'
    }
    return (
        <li className='movie'>
            <img alt='Карточка' className='movie__image' src={`${MOVIES_URL}` + movie.image.url} />
            <div className='movie__container'>
                <h2 className='movie__title'>{movie.nameRU}</h2>
                <Route path='/movies'>
                    <button type='button' className='movie__like-button' onClick={handleLike}><img src={isLiked ? like : dislike} alt='Сердечко' /></button>
                </Route>
                <Route path='/saved-movies'>
                    <button type='button' className='movie__delete-button'><img src={cross} alt='Крестик' /></button>
                </Route>
            </div>
            <p className='movie__duration'>{handleDuration(movie.duration)}</p>
        </li>
    )
}
