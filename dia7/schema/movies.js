const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
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