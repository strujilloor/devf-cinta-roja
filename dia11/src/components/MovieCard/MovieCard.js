import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.image} alt="movie" />
                                <span className="card-title"> {this.props.title} </span>
                        </div>
                        <div className="card-content">
                            <p>{ this.props.description }</p>
                        </div>
                        <div className="card-action">
                            <p>{ this.props.director }</p>
                            <p> { this.props.theme } </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
