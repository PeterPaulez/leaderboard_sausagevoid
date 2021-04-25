const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Lectura y parseo del BODY
app.use(express.json()); // middlewhere

// CREAR: Servidor
const server = require('http').createServer(app); // Anexamos APP del Express

// Path Público
const publicPath=path.resolve(__dirname,'public');
app.use(express.static(publicPath));

// Mis Rutas
app.use('/api', require('./routes/leaders'));

// Gris o verder si lo mira como si fuera un string
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto!!!', process.env.PORT);
});
