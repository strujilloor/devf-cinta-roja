class Pokemon {
    constructor(id, name, weight, moves) {
        this.id = id,
        this.name = name,
        this.weight = weight, 
        this.moves = moves
    }
}

// fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//     .then((response) => {
//         return response.json()
//     })
//     .then((pokemon) => {
//         let ditto = new Pokemon(pokemon.id, pokemon.name, pokemon.weight, pokemon.moves)
//         console.log(ditto);

//     })

const getPokemon = (pokemonName) => {
    return new Promise ( (resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                }
                console.log(reject);
                reject(response.status)
                // return response.status === 200 ? response.json() : reject(response.status)
            })
            .then((pokemon) => {
                resolve(new Pokemon(pokemon.id, pokemon.name, pokemon.weight, pokemon.moves))
            })
            .catch((razon) => {
                reject(razon)
            })
    })
    
}

getPokemon('perro')
    .then((pokemon) => console.log(pokemon))
    .catch((razon) => console.log(razon))