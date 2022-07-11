import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/notfound'>
          <NotFound />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/signup'>
          <SignUp/>
        </Route>
        <Route exact path='/signin'>
          <SignIn/>
        </Route>
        <Footer />
      </Switch>
      
    </div>
  );
}

export default App;
