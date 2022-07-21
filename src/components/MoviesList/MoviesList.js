import React from 'react'
import Movie from '../Movie/Movie'
import { MoviesCards } from '../../context/MoviesContext'
import './MoviesList.css'
import Preloader from '../Preloader/Preloader/Preloader'

export default function MoviesList(props) {
    const movies = React.useContext(MoviesCards)
    console.log(props.isLoading)
    return (
        <section className='movies__container'>
            <ul className='movies__list'>
                {
                    props.isLoading ?
                        <Preloader />
                        :
                        movies.map(movie => {
                            return (
                                <Movie
                                    movie={movie}
                                    key={movie.id}
                                />
                            )
                        })
                }
            </ul>
        </section>
    )
}
