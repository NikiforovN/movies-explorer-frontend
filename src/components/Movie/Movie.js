import React from 'react'
import './Movie.css'
import like from '../../images/icon__like.svg'
import dislike from '../../images/icon__dislike.svg'
import cross from '../../images/icon__cross.svg'
import { Route, useLocation } from 'react-router-dom';


export default function Movie(props) {
    const MOVIES_URL = 'https://api.nomoreparties.co'

    const [isLiked, setIsLiked] = React.useState(
        () => props.savedMovies.some(m => m.movieId === props.movie.id)
    );

    React.useEffect(() => {
        setIsLiked(() => props.savedMovies.some(m => m.movieId === props.movie.id
        ));
    }, [props.savedMovies]);


    function handleDuration(duration) {
        const hour = Math.trunc(duration / 60);
        const minutes = duration % 60
        return hour > 0 ? hour + 'ч' + minutes + 'м' : minutes + 'м'
    }

    function onClick(trailerLink) {
        return () => {
            window.open(trailerLink, '_blank', 'noopener,noreferrer')
        }
    }

    const location = useLocation()

    return (
        <li className='movie'>
            <img
                alt={props.movie.nameRU}
                className='movie__image'
                src={location.pathname === '/movies' ? (`${MOVIES_URL}` + props.movie.image.url) : props.movie.image}
                onClick={onClick(props.movie.trailerLink)}
            />
            <div className='movie__container'>
                <h2 className='movie__title'>{props.movie.nameRU}</h2>
                <Route path='/movies'>
                    <button onClick={() => {
                        props.handleMovieLike(props.movie);
                        setIsLiked(!isLiked)
                    }} type='button' className='movie__like-button'><img src={isLiked ? like : dislike} alt='Сердечко' /></button>
                </Route>
                <Route path='/saved-movies'>
                    <button
                        onClick={() => {
                            props.handleMovieDelete(props.movie)
                        }}
                        className='movie__delete-button'
                    >
                        <img src={cross} alt='Крестик' />
                    </button>
                </Route>
            </div>
            <p className='movie__duration'>{handleDuration(props.movie.duration)}</p>
        </li>
    )
}
