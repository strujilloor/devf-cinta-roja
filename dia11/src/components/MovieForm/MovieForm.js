import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import M from 'materialize-css';

export default class MovieForm extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    state = {
        title: "Thor",
        year: 2019,
        description: "Un súperheroe",
        image: ["https://images-na.ssl-images-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg"],
        theme: "acción",
        director: "Unknown"
    }

    handleChange(event) {
        event.preventDefault();
        if(event.target.id === "image") {
            this.setState({
                [event.target.id]: [event.target.value]
            })
        } else {
            this.setState({
                [event.target.id]: event.target.value
            })
        }
    }

    submit(state) {
        axios.post("https://cinta-roja32.herokuapp.com/api/v1/pelicula", state)
            .then(data => {
                Swal.fire("Película guardada", "", "success")                
                    .then(() => {
                        window.location.assign('/');
                    });
            })
            .catch(err => {
                Swal.fire("Error al registrar película", "", "error");
            })
    }

    render() {
        return (
            <div>
                <form>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input value={this.state.title} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Año</label>
                        <input value={this.state.year} onChange={this.handleChange.bind(this)} type="number" className="form-control" id="year" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input value={this.state.description} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Liga portada</label>
                        <input value={this.state.image} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="liga">Género</label>
                        <select value={this.state.theme} onChange={this.handleChange.bind(this)} className="custom-select" id="theme">
                            <option value="drama">drama</option>
                            <option value="acción">acción</option>
                            <option value="comedia">comedia</option>
                            <option value="terror">terror</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input value={this.state.director} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="director" />
                    </div>
                    <div onClick={() => this.submit(this.state)} className="btn btn-primary">Agregar</div>
                </form>
                <br />
            </div>
        )
    }
}