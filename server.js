const express = require('express');
const server = express();

server.get('/my/primer/server', (req, res) => {
    res.send('Hola mundo!!!');
});

server.get('/json', (req, res) => {
    const json = {
        nombre: 'Jhon',
        apellido: 'Doe',
    }
    res.json(json);
});

server.get('/error', (req, res) => {
    res.statusCode = 500;
    res.json({ error: 'Algo salió mal :(' });
});

server.get('/photos/1', (req, res) => {
    res.json({
        id: 1,
        title: 'Example image',
        url: 'https://example.com/image/1'
    });
});

server.get('/photos', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'Example image',
            url: 'https://example.com/image/1'
        },
        {
            id: 2,
            title: 'Another example image',
            url: 'https://example.com/image/2'
        }
    ]);
});

// Nuestro array con multiples fotos
const fotos = [
    {
        id: 1,
        title: 'Example 2',
        url: 'https://example.com/images/1'
    },
    {
        id: 2,
        title: 'Example 2',
        url: 'https://example.com/images/2'
    }
];

// Definicion de la ruta de express 
// que retorna una foto especifica
server.get('/photos/:indiceFoto', (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    res.json(fotos[indiceFoto]);
});

server.get('/photos', (req, res) => {
    // req.query contiene todos los 
    // query strings enviados
    const { size, author } = req.query;
    res.json({size, author});
});

server.listen(3000, () => {
    console.log('Servidor iniciado...');
});
