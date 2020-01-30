const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

//Configuración para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.status(200).send({mensaje: "hola mundo"})
})

app.get('/api/suma', (req, res) => {
    console.log(req.query);
    const { num1, num2 } = req.query
    const resultado = parseFloat(num1) + parseFloat(num2);
    res.status(200).send({resultado})
})

app.get('/api/usuario/:name', (req, res) => {
    console.log(req.params);
    const name = req.params.name.replace("+", " "); 
    res.status(200).send({usuario: name})
})

app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
});