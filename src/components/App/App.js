import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
import { moviesApi } from '../../utils/MoviesApi'
import { CurrentUser } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: ''
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [isSignInError, setIsSignInError] = React.useState()
  const [isSignUpError, setIsSignUpError] = React.useState()

  const history = useHistory()
  const location = useLocation()


  React.useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);


  React.useEffect(() => {
    getInitialMovies();
  }, [])

 
  function toggleBurgerMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleRegister({ name, email, password }) {
    return api.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
        setIsSignUpError(false)
      })
      .catch(() => setIsSignUpError(true))
  }

  function handleLogin({ email, password }) {
    return api.login({ email, password })
      .then(res => {
        if (!res) {
          return
        }
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true)
        history.push('/movies')
        setIsSignInError(false)
      })
      .catch(() => setIsSignInError(true))
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      ;
      api.getProfile()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          }
        })
        .catch((err) => console.log(err))
    }
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchRequest");
    localStorage.removeItem('filteredMovies')
    setIsLoggedIn(false);
  }

  function handleEditProfile(user) {
    console.log('current', currentUser, 'newUser', user)
    api.editProfile(user)
      .then((newUserData) => {
        setCurrentUser(newUserData)
      })
      .catch(err => console.log(err))
  }

  function getInitialMovies() {
    moviesApi.getMovies()
      .then((moviesFromApi) => {
        localStorage.setItem('initialMovies', JSON.stringify(moviesFromApi));
      })
      .catch((err) => console.log(err))
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
            <SignUp handleSubmit={handleRegister} isError={isSignUpError} />
          </Route>

          <Route path='/signin'>
            <SignIn handleSubmit={handleLogin} isError={isSignInError} />
          </Route>

          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile isMenuOpen={isMenuOpen} handleSignOut={handleSignOut} handleSubmit={handleEditProfile} />
          </ProtectedRoute>

          <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
            <Movies isLoggedIn={isLoggedIn} getInitialMovies={getInitialMovies}/>
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
            <SavedMovies />
            <Footer />
          </ProtectedRoute>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </CurrentUser.Provider>
    </section>
  );
}

export default App;
