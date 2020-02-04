const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const movieSchema = new Schema({
    movieId: ObjectId,
    title: String,
    year: Number,
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://images.freecreatives.com/wp-content/uploads/2017/10/flat-clapperboard-icon_1063-38.jpg'
    },
    theme: {
        type: String,
        enum: ['Comedia', 'Terror', 'Drama', 'Infantil']
    },
    director: {
        type: String,
        default: 'Desconocido'
    }
})

const Movie = mongoose.model('Movie', movieSchema); // transformar a un modelo

module.exports = Movie;
