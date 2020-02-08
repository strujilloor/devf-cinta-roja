import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.image} />
                            <span className="card-title"> {this.props.title} </span>
                            <a href="" className="btn-floating halfway-fab waves-effect waves-light blue darken-2">
                                <i className="material-icons">edit</i>
                            </a>
                        </div>

                        <div className="card-content">
                            <h5>{this.props.year}</h5>
                            <p>{this.props.description}</p>
                            <br/>
                            <p><b>Director:</b> {this.props.director}</p>
                            <p><b>Tema:</b> {this.props.theme}</p>
                        </div>

                        <div className="card-action">
                            <button class="waves-effect waves-light btn red darken-1">
                                <i class="material-icons left">delete_forever</i>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
