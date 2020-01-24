class Pokemon {
    constructor(id, name, sprite, moves) {
        this.id = id,
        this.name = name,
        this.sprite = sprite, 
        this.moves = moves
    }
}

const getPokemon = (name) => {
    return new Promise( (resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => {
                if( response.status === 200 ) {
                    response.json()
                        .then( (poke) => {
                            const pokemon = new Pokemon(poke.id, poke.name, poke.sprites.front_default, poke.moves);
                            resolve(pokemon);
                        })
                        .catch(err => reject(err))
                } else {
                    reject(`HTTP Status ${response.status}`);
                }
            })
            .catch((error) => console.log(error))
    })
}

// getPokemon('ditto')
//     .then( (pokemon) => console.log(pokemon) )
//     .catch( (err) => console.error(err) )


let boton = document.querySelector('#boton');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    getPokemon(document.querySelector('#campo').value.toLowerCase())
        .then( (pokemon) => mostrarPokemon(pokemon) )
        .catch( (err) => alert(err) );
    // console.log(document.querySelector('#campo').value);
})

const mostrarPokemon = (pokemon) => {
    let image = document.querySelector('#image');
    let pokemonName = document.querySelector('#pokemonName');
    let lista = document.querySelector('#lista');
    lista.innerHTML = ''; // eliminar todos los li dentro de la lista

    image.src = pokemon.sprite;
    pokemonName.textContent = pokemon.name;
    let contador = 1;
    pokemon.moves.forEach( move => {
        if (contador < 5) {
            let li = document.createElement('li');
            li.textContent = move.move.name;
            lista.appendChild(li)
            contador++;
        } else {
            return
        }
    });
    
}