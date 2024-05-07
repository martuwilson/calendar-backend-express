const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const {validarJWT} = require('../middlewares/jwtValidate');

const router = Router();

//Todas deben pasar por el JWT
router.use(validarJWT); // con esta linea, todo lo de abajo debe tener el jwt

//Obtener eventos del calendario}
router.get('/', getEventos);

//crear un nuevo evento
router.post('/', crearEvento);

//actualizar evento
router.put('/:id', actualizarEvento);

//borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;