const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const PORT = 3000;

const app = express();

//Configuración para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// 1)
app.get('/api', (req, res) => {
    res.status(200).send({mensaje: "hola mundo"})
})

// 2)
app.get('/api/suma', (req, res) => {
    console.log(req.query);
    const { num1, num2 } = req.query
    const resultado = parseFloat(num1) + parseFloat(num2);
    res.status(200).send({resultado})
})

// 3)
app.get('/api/usuario/:name', (req, res) => {
    console.log(req.params);
    const name = req.params.name.replace("+", " "); 
    res.status(200).send({usuario: name})
})

// 4)
app.get('/api/swapi/:personaje', (req, res) => {
    console.log(req.params);
    const { personaje } = req.params;
    const options = {
        uri: `https://swapi.co/api/people/?search=${ personaje }`,
        json: true // Automatically parses the JSON string in the response
    };
    rp(options)
        .then(data => {
            const personaje = data.results[0];
            res.status(200).send({personaje: personaje});
        })
        .catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
})

// Filter 1)  Genera un nuevo arreglo en el que solo se encuentren los conejos del arreglo original
app.post('/api/getConejitos', (req, res) => {
    // console.log(req.body.animalitos);
    const { animalitos } = req.body;
    const conejitos = animalitos.filter(animal => animal.especie === 'conejo');
    res.status(200).send({conejos: conejitos});
})

// Map 2)  Genera un nuevo arreglo que contenga los nombres de todas las mascotas.
app.post('/api/getNombres', (req, res) => {
    const { mascotas } = req.body;
    // console.log(mascotas);
    const nombres = mascotas.map(mascota => mascota.nombre);
    res.status(200).send(nombres);
})


app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
});