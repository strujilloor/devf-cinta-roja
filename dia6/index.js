const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
const programs = `${__dirname}/views/programs.html`;
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.status(200).send('server arriba')
})

// request.body
app.post('/alumni', (request, response) => {
    console.log(request.body);
    const { name, program } = request.body;
    const status = 'Inscrito'
    const respuesta = {
        name,
        program,
        status
    }
    response
        .status(200)
        .send(respuesta);
})

// Query parameters (OPCIONALES)
app.get('/programs', (request, response) => {
    console.log(request.query);
    const { gclid, location } = request.query;
    console.log(gclid);
    console.log(location);
    response.status(200).sendFile( programs )
})

// POKEAPI.CO/API/V2/PIKACHU
// Params (OBLIGATORIO)
app.get('/getProgram/:program', (request, response) => {
    const { program } = request.params;
    console.log( program );
    switch ( program ) {
        case 'CintaRoja' :
            const cintaRoja = {
                name: "Cinta Roja",
                content: {
                    js: 'ES6',
                    express: 'Express 4.17',
                    db: 'MongoDB',
                    frontend: 'ReactJs'
                }
            }
            response.status(200).send(cintaRoja);
            break;

        case 'CintaBlanca' :
            const cintaBlanca = {
                name: "Cinta Blanca",
                content: {
                    js: 'JS Básico',
                    express: 'no aplica',
                    db: 'no aplica',
                    frontend: 'bootstrap'
                }
            }
            response.status(200).send(cintaBlanca);
            break;
        
        default :
            response.status(404).send('Programa no encontrado 🤷‍♀️🙅‍♀️')
            break;
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});