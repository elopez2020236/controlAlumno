const express = require('express');
const controladorUsuario = require('../controllers/asignacion.controller');


const api = express.Router();

api.post('/obtenerAsignacion', controladorUsuario.obtenerAsignacion);
api.post('/agregarAsignacion', controladorUsuario.agregarAsignacion);
api.put('/editarAsignacion', controladorUsuario.editarasignacion);
api.delete('/eliminarAsignacion', controladorUsuario.eliminarAsignacion);


module.exports = api;