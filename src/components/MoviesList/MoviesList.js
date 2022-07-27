import React from 'react'
import Movie from '../Movie/Movie'
import './MoviesList.css'

export default function MoviesList(props) {
    return (
        <section className='movies__container'>
            <ul className='movies__list'>
                    {
                        props.movies.map(movie => {
                            return (
                                <Movie
                                    movie={movie}
                                    savedMovies={props.savedMovies}
                                    key={movie.id || movie._id}
                                    handleMovieDelete={props.handleMovieDelete}
                                    handleMovieLike={props.handleMovieLike}
                                />
                            )
                        })
                    }
            </ul>
        </section>
    )
}
