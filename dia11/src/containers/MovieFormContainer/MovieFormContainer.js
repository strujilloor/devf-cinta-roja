import React, { Component } from 'react'
import MovieForm from '../../components/MovieForm/MovieForm';

export default class MovieFormContainer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <MovieForm />
                </div>
            </div>
        )
    }
}