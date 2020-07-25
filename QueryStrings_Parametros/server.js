const express = require('express');
const server = express();
const alumnos = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Gonzalez',
        comision: 'dwfs'
    },
    {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Martinez',
        comision: 'dwfs'
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Fernandez',
        comision: 'dwfs'
    },
    {
        id: 4,
        nombre: 'Esteban',
        apellido: 'Moreno',
        comision: 'dwa'
    },
    {
        id: 5,
        nombre: 'Pedro',
        apellido: 'Estevez',
        comision: 'dwa'
    },
    {
        id: 6,
        nombre: 'Lucas',
        apellido: 'Suarez',
        comision: 'dwa'
    },
    {
        id: 7,
        nombre: 'Esteban',
        apellido: 'Andrade',
        comision: 'bigdata'
    },
    {
        id: 8,
        nombre: 'Sebastian',
        apellido: 'Hernandez',
        comision: 'bigdata'
    },
    {
        id: 9,
        nombre: 'Lucas',
        apellido: 'Manso',
        comision: 'bigdata'
    }
];

server.get('/acamica/:comision/alumnos', (req, res) => {
    let alumnosPorComision = alumnos
        .filter(a => 
            a.comision === req.params.comision);

    if(req.query && req.query.nombre) {
        alumnosPorComision = alumnosPorComision
            .filter(a => a.nombre === req.query.nombre);
    }   

    res.json(alumnosPorComision);
});

server.get('/acamica/:comision/alumnos/:id', (req, res) => {
    const alumno = alumnos
        .find(a => 
            a.id == req.params.id && 
            a.comision === req.params.comision);

    if(!alumno) {
        res.statusCode = 404;
        res.json('Alumno inexistente');
    } else {
        res.json(alumno);
    }
});

server.delete('/acamica/:comision/alumnos/:id', (req, res) => {
    const index = alumnos
        .findIndex(a => 
            a.id == req.params.id && 
            a.comision === req.params.comision);

    if(index > -1) {
        alumnos.splice(index, 1);
        res.json(alumnos);
    } else {
        res.statusCode = 404;
        res.json('Alumno inexistente');
    }
});

server.listen(3000, () => {
    console.log('Servidor iniciado...');
});
