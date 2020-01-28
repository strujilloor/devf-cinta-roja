const express = require('express');
const bodyParser = require('body-parser')
const app = express(); // levantamos el servidor

const PORT = 3000;

app.use(bodyParser.json()); // cuando llegue el request del cliente podamos interpretar el body como un json

const home = `${__dirname}/views/index.html`;
console.log(home);

// Endpoint
app.get('/', (request, response) => {
    response.status(200).sendFile(home) // mando un status 200 y un html
})

app.get('/name', (request, response) => {
    const name = {
        name: 'Stiven',
        age: 27
    }
    response.status(200).send(name) // mando un objeto
})

app.post('/suma', (request, response) => {
    console.log(request.body); // me lo devuelve ya parseado gracias al body-parser
    const { num1, num2 } = request.body;
    const result = {
        sum : num1 + num2
    }
    console.log(result);
    response.status(200).send(result)
})

// siempre debe estar al final
app.listen(PORT, () => {
    console.log('servidor arriba en el puerto ' + PORT);
})

