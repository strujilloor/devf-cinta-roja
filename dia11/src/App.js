import React from 'react';
import { MoviesContainer } from './containers/MoviesContainer/MoviesContainer';
import MovieFormContainer from './containers/MovieFormContainer/MovieFormContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss'; // siempre al ultimo los css


function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={MoviesContainer} />
        <Route exact path='/addMovie' component={MovieFormContainer} />
      </BrowserRouter>

    </div>
  );
}

export default App;
