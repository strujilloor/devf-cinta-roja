import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';


export const MoviesContainer = () => {

    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        axios.get('https://crud-movies.herokuapp.com/api/v1/getMovies')
            .then(movies => {
                console.log(movies);
                setMovies(movies.data)
            })
            .catch(err => setMovies([]))
    }, []);

    return (
        <div>
            <div className="container">
                <br/>
                <h1>Contenedor de Películas</h1>
                <section>
                    <div className="row">
                        {movies.map(movie => (
                            <MovieCard
                                image={movie.image}
                                title={movie.title}
                                description={movie.description}
                                director={movie.director}
                                theme={movie.theme}
                                year={movie.year}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

// npm i --save-dev node-sass