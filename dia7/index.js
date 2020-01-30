const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MONGO = require('./const');
const router = require('./routes/routes');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());


mongoose.connect(MONGO.URI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('Conectado a la BD ✔'))
    .catch( err => console.log(`❌ ${err}`))

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})