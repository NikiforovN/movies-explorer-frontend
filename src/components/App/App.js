import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { api } from '../../utils/MainApi';
import { CurrentUser } from '../../context/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import { MoviesCards } from '../../context/MoviesContext';

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: ''
  });
  const [movies, setMovies] = React.useState({})
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const history = useHistory()

  React.useEffect(() => {
    tokenCheck();
    console.log(123)
  }, [isLoggedIn]);


  React.useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true)
      Promise.all([api.getProfile(), moviesApi.getMovies(), tokenCheck()])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setMovies(movies)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
        history.push('/movies');
        return;
    }
    history.push('/')
  }, [isLoggedIn]);

  function toggleBurgerMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleRegister({ name, email, password }) {
    return api.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch(err => console.log(err.message))
  }

  function handleLogin({ email, password }) {
    return api.login({ email, password })
      .then(res => {
        if (!res) {
          return
        }
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true)
        history.push('/profile')
      })
      .catch(err => console.log(err.message))
  }

  function tokenCheck() {
    console.log('Запускаюсь')
    if (localStorage.getItem("jwt")) {
      setIsLoggedIn(true)
    }
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }

  function handleEditProfile(user) {
    api.editProfile(user)
      .then((newUserData) => {
        setCurrentUser(newUserData)
      })
  }


  return (
    <section className='app'>

      <CurrentUser.Provider value={currentUser}>
        <Header
          isMenuOpen={isMenuOpen}
          toggleBurgerMenu={toggleBurgerMenu}
          isLoggedIn={isLoggedIn}
        />
        <Menu isMenuOpen={isMenuOpen} toggleBurgerMenu={toggleBurgerMenu} isLoggedIn={isLoggedIn} />

        <Switch>

          <Route exact path='/'>
            <Main />
            <Footer />
          </Route>

          <Route path='/signup'>
            <SignUp handleSubmit={handleRegister} />
          </Route>

          <Route path='/signin'>
            <SignIn handleSubmit={handleLogin} />
          </Route>

          <Route path='/profile'>
            <Profile isMenuOpen={isMenuOpen} handleSignOut={handleSignOut} handleSubmit={handleEditProfile} />
          </Route>
          <MoviesCards.Provider value={movies}>
            <Route path='/movies'>
              <Movies isLoading={isLoading} />
              <Footer />
            </Route>

            <Route path='/saved-movies'>
              <SavedMovies />
              <Footer />
            </Route>
          </MoviesCards.Provider>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </CurrentUser.Provider>
    </section>
  );
}

export default App;
