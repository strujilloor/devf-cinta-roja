const express = require('express');
const bodyParser = require('body-parser')
const app = express(); // levantamos el servidor

const PORT = 3000;

app.use(bodyParser.json());

const home = `${__dirname}/views/index.html`;
console.log(home);

// Endpoint
app.get('/', (request, response) => {
    response.status(200).sendFile(home)
})

app.get('/name', (request, response) => {
    const name = {
        name: 'Stiven',
        age: 27
    }
    response.status(200).send(name)
})

app.post('/suma', (request, response) => {
    console.log(request.body);
    const { num1, num2 } = request.body;
    const result = num1 + num2;
    response.status(200).send(result)
    console.log(num1, num2);
})

app.listen(PORT, () => {
    console.log('servidor arriba en el puerto ' + PORT);
})

