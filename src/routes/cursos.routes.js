const express = require('express');
const controladorUsuario = require('../controllers/cursos.controller');


const api = express.Router();

api.post('/agregarCurso', controladorUsuario.agregarCurso);
api.post('/obtenerCurso', controladorUsuario.obtenerCurso);
api.put('/editarCurso/:idCursos', controladorUsuario.editarCurso);
api.delete('/EliminarCurso/:idCursos', controladorUsuario.EliminarCurso);

module.exports = api;