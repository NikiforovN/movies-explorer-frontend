import React from 'react'
import ButtonMore from '../ButtonMore/ButtonMore'
import MoviesList from '../MoviesList/MoviesList'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader/Preloader'
import './Movies.css'
import { api } from '../../utils/MainApi'
import { useLocation } from 'react-router-dom'

export default function Movies(props) {
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false)
  const [movies, setMovies] = React.useState([]);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [savedMovies, setSavedMovies] = React.useState([])
  const [stepToRender, setStepToRender] = React.useState()

  const location = useLocation()

  React.useEffect(() => {
    setMovies([]);
    setRenderedMovies([]);
  }, []);

  React.useEffect(() => {
    if (location.pathname === '/movies' && localStorage.filteredMovies) {
      setMovies(JSON.parse(localStorage.filteredMovies))
      renderMovies()
    }
  }, [location.pathname])

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [windowWidth])

  React.useEffect(() => {
    getSavedMovies()
  }, [])

  React.useEffect(() => {
    renderMovies()
  }, [movies])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const filterMovies = (unfilteredMovies) => {
    const searchRequestData = JSON.parse(localStorage.searchRequest);
    const checkBoxState = searchRequestData.checkBox;
    const request = searchRequestData.request;
    return unfilteredMovies.filter(movie => {
      if (checkBoxState === true) {
        return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(request.toLowerCase());
      } else {
        return movie.nameRU.toLowerCase().includes(request.toLowerCase());
      }
    });
  }

  const addStepToRender = () => {
    if (windowWidth >= 1280) {
      renderedMovies.length === 0 ? setStepToRender(12) : setStepToRender(4)
    }
    if (windowWidth < 1280 && windowWidth >= 990) {
      renderedMovies.length === 0 ? setStepToRender(9) : setStepToRender(3)
    }
    if (windowWidth < 990 && windowWidth >= 580) {
      renderedMovies.length === 0 ? setStepToRender(5) : setStepToRender(2)
    }
    if (windowWidth < 580) {
      renderedMovies.length === 0 ? setStepToRender(5) : setStepToRender(2)
    }
  }

  const renderMovies = () => {
    addStepToRender()
    const moviesToRender = movies.splice(0, stepToRender);
    setRenderedMovies([...renderedMovies, ...moviesToRender]);
  }

  const handleSearchSubmit = (moviesFromApi) => {
    setTimeout(() => {
      setIsMoviesLoading(false)
    }, 1000)
    const filteredMovies = filterMovies(moviesFromApi);
    setRenderedMovies([]);
    setMovies(filteredMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
  }

  const getSavedMovies = () => {
    api.getMovies()
      .then((movies) => {
        setSavedMovies(movies)
      })
      .catch(err => console.log(err))
  }

  const handleMovieLike = (movie) => {
    const isLiked = savedMovies.find(m => m.movieId === movie.id);
    const movieToDelete = savedMovies.find(m => m.movieId === movie.id)
    if (!isLiked) {
      api.addMovie(movie)
        .then(res => {
          if (res) {
            setSavedMovies([...savedMovies, res])
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api.deleteMovie(movieToDelete._id)
        .then(res => {
          if (res) {
            setSavedMovies(savedMovies.filter(movie => {
              return movie._id !== movieToDelete._id
            }))
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSearchSubmit} setIsMoviesLoading={setIsMoviesLoading} getInitialMovies={props.getInitialMovies} />
      {
        isMoviesLoading ?
          <Preloader />
          :
          <>
            <MoviesList movies={renderedMovies} savedMovies={savedMovies} handleMovieLike={handleMovieLike} />
            {
              movies.length !== 0 &&
              <ButtonMore onClick={renderMovies} />
            }
          </>
      }
      {
        renderedMovies.length === 0 && !isMoviesLoading &&
        <p className='movies__not-found'>К сожалению фильмов нет:(</p>
      }
    </section>
  )
}
