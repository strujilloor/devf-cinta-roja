var rp = require('request-promise');
// 1) 
let peticionLibro = (word) => {
    rp( `http://openlibrary.org/search.json?q=${ word.replace(/\s/g, "+") }` ) // reemplaza los espacios en blanco por +
        .then(function (data) {
            let libros = JSON.parse(data)
            let autores = libros.docs[0].author_name
            console.log('1) ' + autores);
            return autores;
        })
        .catch(function (err) {
            console.log(err);
        });
}

peticionLibro('i robot');

// 2)
let buscarPorAutor = (autor) => {
    rp( `http://openlibrary.org/search.json?q=${ autor.replace(/\s/g, "+") }` ) // reemplaza los espacios en blanco por +
        .then(function (data) {
            let libros = JSON.parse(data).docs
            console.log('2) libros  -> ' + libros[5].title_suggest);
        })
        .catch(function (err) {
            console.log(err);
        });
}

buscarPorAutor('asimov')
// 3)
let getGenero = (nameBand) => {
    rp(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nameBand}`)
        .then((data) => {
            // console.log(JSON.parse(data).artists[0].strGenre);
            let genero = JSON.parse(data).artists[0].strGenre;
            console.log(`3) ${nameBand} genero: ${genero}`);
        })
        .catch((err) => {
            console.log(err);
        })
}

getGenero('eminem')

// 4)
let getPeliculas = () => {
    rp(`https://swapi.co/api/people/1/`)
        .then( (data) => {
            // console.log(JSON.parse(data).films);
            let films = JSON.parse(data).films;
            console.log(`4) ${JSON.parse(data).name} films: ${films}`);
        })
        .catch((err) => {
            console.log(err);
        })
}

getPeliculas()

// 5) 
let getAsteroides = () => {
    rp(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-20&end_date=2020-01-27&api_key=EDZQMC9rMWRqAeGIk7HE2NftWVVBIFxll89XLPJe`)
        .then( (data) => {
            console.log('5) primer asteroide -> ' + JSON.parse(data).near_earth_objects['2020-01-20'][0].name);
        })
        .catch( (err) => {
            console.log(err);
        })

}

getAsteroides();

// 6) 
let getPokemons = () => {
    rp(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
        .then((data) => {
            console.log('hola -> ' + JSON.parse(data).results);
        })
        .catch((err) => {
            console.log(err);
        })
}

getPokemons();