import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

export const MoviesContainer = () => {
    return (
        <div>
            <h1>Contenedor de Películas</h1>
            <section>
                <div className="row">
                    <MovieCard 
                        image="https://i.pinimg.com/564x/d8/53/4e/d8534ef914bab938d35daa14b8141715.jpg"
                        title="Sonic la pelicula"
                        description="lorem lorem lorem bla bla bla"
                        director="Desconocido"
                        theme="Acción"
                    />
                </div>
            </section>
        </div>
    )
}

