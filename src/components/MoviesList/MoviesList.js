import React from 'react'
import Movie from '../Movie/Movie'
import './MoviesList.css'

export default function MoviesList() {
    return (
        <section className='movies__container'>
            <ul className='movies__list'>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </ul>
        </section>
    )
}
