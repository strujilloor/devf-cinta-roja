import React from 'react';
import { MoviesContainer } from './containers/MoviesContainer/MoviesContainer';
import './App.css'; // siempre al ultimo los css
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <MoviesContainer />
    </div>
  );
}

export default App;
