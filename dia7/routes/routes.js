const express = require('express');
const router = express.Router();

const Movie = require('../schema/movies');
const MAINROUTE = '/api/v1';

router.get('/', (req, res) => {
    res.status(200).send('Server Arriba (👍)');
})

// CRUD
// Create
router.post(`${MAINROUTE}/createMovie`,  (req, res) => {
    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    })
    newMovie.save((err, movie) => {
        err
            ? res.status(409).send(err)
            : res.status(201).send(movie._id);
    });
});

// Read
router.get(`${MAINROUTE}/getMovies`, (req, res) => {
    // Movie.find()
    //     .then(movies => res.status(200).send(movies))
    //     .catch(err => res.status(404).send(err));
    Movie.find((err, movies) => {
        err
            ? res.status(404).send(err)
            : res.status(200).send(movies);
    });
});

router.get(`${MAINROUTE}/getMovieById`, (req, res) => {
    const { id } = req.query;
    Movie.findById(id, (err, movie) => {
        err
            ? res.status(404).send(err)
            : res.status(200).send(movie);
    })
});

// Update
// completamente el registro
router.put(`${MAINROUTE}/updateMovieById`, (req, res) => {
    const { id } = req.query;
    const { title, year, description, image, theme, director } = req.body;
    if (Object.keys(req.body).length === 6) {
        Movie.findByIdAndUpdate(id, {
            title,
            year,
            description,
            image,
            theme,
            director
        }, (err, movie) => {
            err
                ? res.status(304).send(err) // not modified
                : res.status(202).send(movie)
        })
    } else {
        res.status(400).send("Método Incorrecto, intenta utlizar PATCH");
    }
    console.log(Object.keys(req.body).length);
});

// parcialmente el registro
router.patch(`${MAINROUTE}/updateMovieById`, (req, res) => {
    const { id } = req.query;
    const { title, year, description, image, theme, director } = req.body;
    if (Object.keys(req.body).length < 6 && Object.keys(req.body).length  > 0) {
        Movie.findByIdAndUpdate(id, {
            title,
            year,
            description,
            image,
            theme,
            director
        }, (err, movie) => {
            err
                ? res.status(304).send(err) // not modified
                : res.status(202).send(movie)
        })
    } else {
        res.status(400).send("Método Incorrecto, intenta utlizar PATCH");
    }
    console.log(Object.keys(req.body).length);
});

// Delete
router.delete(`${MAINROUTE}/deleteMovieById`, (req, res) => {
    const { id } = req.query;
    Movie.findByIdAndDelete(id, (err, movie) => {
        err
            ? res.status(404).send(err)
            : res.status(204).send()
    })
});

module.exports = router;