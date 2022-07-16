import React from 'react'
import './Movie.css'
import movieImage from '../../images/movie.jpg';
import like from '../../images/icon__like.svg'
import dislike from '../../images/icon__dislike.svg'

export default function Movie() {
    const [isLiked, setIsliked] = React.useState(false);
    function handleLike(){
        setIsliked(!isLiked)
    }
    return (
        <li className='movie'>
            <img alt='Карточка' className='movie__image' src={movieImage} />
            <div className='movie__container'>
                <h2 className='movie__title'>33 слова о дизайне</h2>
                <button className='movie__like-button'><img src={isLiked ? like : dislike} alt='Сердечко' onClick={handleLike}/></button>
            </div>
            <p className='movie__duration'>1ч42м</p>
        </li>
    )
}
