import React from 'react'
import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesList from '../MoviesList/MoviesList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

export default function Movies() {
  return (
    <section className='movies'>
        <SearchForm/>
        <MoviesList />
        <ButtonMore />
    </section>
  )
}
