const express = require('express');
const bodyParser = require('body-parser');
const fs = require ('fs');
const app = express();

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

const data = require('./file.json')

app.get('/', function (req, res) {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})

app.listen(3000, () => {
    console.log('Servidor inicializado na 3000')
});