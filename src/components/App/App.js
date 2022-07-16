import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleBurgerMenu() {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <section className='app'>
      <Header
        isMenuOpen={isMenuOpen}
        toggleBurgerMenu={toggleBurgerMenu}
      />
      <Menu isMenuOpen={isMenuOpen} />

      <Switch>
        <Route exact path='/'>
          <Main />
          <Footer />
        </Route>
        <Route exact path='/notfound'>
          <NotFound />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/profile'>
          <Profile isMenuOpen={isMenuOpen} />
        </Route>

        <Route path='/movies'>
          <Movies />
          <Footer />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
