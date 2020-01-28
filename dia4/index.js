var request = require('request');
var rp = require('request-promise');
var PokeApi = require('pokeapi');

const Pokemon = require('./pokemon');

var api = PokeApi.v1();

console.log(api.get(1));

// api.get('ditto').then(ditto => {
//     console.log('AQUI DITTTO');
//     console.log(ditto);
// }, function(err) {
//     console.log('ERROR', err);
// });


rp(`https://pokeapi.co/api/v2/pokemon/ditto/`)
    .then(function (htmlString) {
        // Process html...
        const resPokemon = JSON.parse(htmlString);
        const pokemon = new Pokemon.Pokemon(
            resPokemon.id, 
            resPokemon.name, 
            resPokemon.sprites.front_default, 
            resPokemon.moves
        )

        console.log(pokemon);
    })
    .catch(function (err) {
        // Crawling failed...
        console.log(`Status code ----> ${err.statusCode}`);
    });

// const getPokemon = (pokemon) => {
//     return new Promise((resolve, reject) => {
//         const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
//         request( URL, (error, response, body) => {
//             console.log(`Status code ----> ${response.statusCode}`);
//             if( response.statusCode === 200 ) {
//                 const resPoke = JSON.parse(body)
//                 const pokemon = new Pokemon(
//                     resPoke.id, 
//                     resPoke.name, 
//                     resPoke.sprites.front_default, 
//                     resPoke.moves
//                 );
//                 resolve(pokemon);
//             } else {
//                 reject(error);
//             }
//         });
//     })
    
// }

// getPokemon('pikachu')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// getPokemon('solgaleo')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// getPokemon('lucario')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));