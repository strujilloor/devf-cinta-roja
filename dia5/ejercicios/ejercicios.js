var rp = require('request-promise');
// 1) 
let peticionLibro = (word) => {
    rp( `http://openlibrary.org/search.json?q=${ word.replace(/\s/g, "+") }` ) // reemplaza los espacios en blanco por +
        .then(function (htmlString) {
            // Process html...
            let libros = JSON.parse(htmlString)
            let autores = libros.docs[0].author_name
            console.log(autores);
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err);
        });
}

peticionLibro('i robot');

// 2)
let buscarPorAutor = (autor) => {
    rp( `http://openlibrary.org/search.json?q=${ autor.replace(/\s/g, "+") }` ) // reemplaza los espacios en blanco por +
        .then(function (htmlString) {
            // Process html...
            let libros = JSON.parse(htmlString).docs
            console.log(libros[0].title_suggest);
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err);
        });
}

buscarPorAutor('asimov')