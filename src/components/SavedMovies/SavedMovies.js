import React from 'react'
import { api } from '../../utils/MainApi'
import MoviesList from '../MoviesList/MoviesList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

export default function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = React.useState([])
  const [initialMovies, setInitialMovies] = React.useState([])
  const [request, setRequest] = React.useState('')
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  })


  React.useEffect(() => {
    if (request === '') {
      getSavedMovies();
    }
  }, [request]);

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function filterMovies(unFilterdMovies, request, checkBox) {
    return unFilterdMovies.filter((movie) => {
      if (checkBox) {
        return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(request.toLowerCase());
      }
      else {
        return movie.nameRU.toLowerCase().includes(request.toLowerCase())
      }
    })
  }


  function getSavedMovies() {
    api.getMovies()
      .then((movies) => {
        setInitialMovies(movies)
        setSavedMovies(movies)
      })
      .catch(err => console.log(err))
  }


  function handleMovieDelete(deletedCard) {
    api
      .deleteMovie(deletedCard._id)
      .then(() => {
        const cardsAfterDelete = savedMovies.filter(
          (c) => c._id !== deletedCard._id
        );
        setSavedMovies(cardsAfterDelete);

      })
      .catch((err) => {
        console.log(err.ok);
      })

  }

  function handleSubmit(request, checkBox) {
    setRequest(request)
    console.log(request, checkBox)
    const filteredMovies = filterMovies(initialMovies, request, checkBox);
    setSavedMovies(filteredMovies);
    console.log(filteredMovies)
  }


  return (
    <section className='saved-movies'>
      <SearchForm onSubmit={handleSubmit} />
      {
        <>
          {
            savedMovies.length !== 0 ?
            <MoviesList movies={savedMovies} handleMovieDelete={handleMovieDelete} savedMovies={savedMovies} />
            :
            <p className='saved-movies__not-found'>К сожалению фильмов нет:(</p>
            }
        </>
      }
    </section>
  )
}
