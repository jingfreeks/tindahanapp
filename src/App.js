import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Page/HomePage';
import ShopPage from './Page/Shop';
import SignInSignUpPage from './Page/Sign-in-Sign-up';
import Header from './Components/header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInSignUpPage} />
      </Switch>

    </div>
  );
}

export default App;
