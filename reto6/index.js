const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Server up')
})

// recibe una lista de estudiantes, y retorna una lista de estudiantes el tipo especificado
app.post('/filter', (req, res) => {
    const { estudiantes, tipo } = req.body;
    const resultado = estudiantes.filter(elem => elem.type === tipo);
    const respuesta = {
        resultado
    };
    res
        .status(200)
        .send(respuesta);
})

// recibe una lista de personas, y retorna una lista de personas con la palabra estudiante
app.post('/map', (req, res) => {
    const { personas } = req.body;
    const resultado = personas.map( (persona) => {
        persona = `Estudiante: ${persona}`;
        return persona;
    })
    const respuesta = {
        resultado
    }
    res
        .status(200)
        .send(respuesta);
})

// recibe una lista de numeros, y retorna la suma de todos estos
app.post('/forEach', (req, res) => {
    const { numeros } = req.body;
    console.log(numeros);
    let resultado = 0;
    numeros.forEach(element => {
        resultado += element;
    });
    res
        .status(200)
        .send(resultado + '')
})

// Recibe una lista de numeros, y retorna la multiplicación de todos estos
app.post('/reduce', (req, res) => {
    const { numeros } = req.body;
    const resultado = numeros.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    })
    const respuesta = {
        resultado
    };
    res
        .status(200)
        .send(respuesta);
})

// Recibe una lista le inserta un valor en el lugar especificado, y retorna la nueva lista
app.post('/splice', (req, res) => {
    const { lista, indice, valor } = req.body;
    lista.splice(indice, 0, valor);
    const respuesta = {
        lista
    }
    res
        .status(200)
        .send(respuesta)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

