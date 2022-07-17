import React from 'react'
import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesList from '../MoviesList/MoviesList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

export default function SavedMovies() {
  return (
    <section className='saved-movies'>
        <SearchForm/>
        <MoviesList/>
        <ButtonMore/>
    </section>
  )
}
