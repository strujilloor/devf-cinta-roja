var request = require('request');
// var rp = require('request-promise');
// var PokeApi = require('pokeapi');
// import Pokemon from './pokemon';

class Pokemon {
    constructor(id, name, sprite, moves) {
        this.id = id,
        this.name = name,
        this.sprite = sprite, 
        this.moves = moves
    }
}

const getPokemon = (pokemon) => {
    return new Promise((resolve, reject) => {
        request(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, (error, response, body) => {
        console.log(`Status code ----> ${response.statusCode}`);
        if( response.statusCode === 200 ) {
            const resPoke = JSON.parse(body)
            const pokemon = new Pokemon(resPoke.id, resPoke.name, resPoke.sprites.front_default, resPoke.moves);
            resolve(pokemon);
        } else {
            reject(error);
        }
    });
    })
    
}

getPokemon('pikachu')
    .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// getPokemon('solgaleo')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// getPokemon('lucario')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));