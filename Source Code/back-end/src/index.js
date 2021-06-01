const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*Faz com que o express faça o arquivo JSON 
    ser entendível para criar um objeto em JavaScript */    
app.use(express.json()); 
app.use(cors());
app.use(routes);


app.listen(3333);