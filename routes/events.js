const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const {validarJWT} = require('../middlewares/jwtValidate');
const { inputsValidator } = require('../middlewares/inputsValidate');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas deben pasar por el JWT
router.use(validarJWT); // con esta linea, todo lo de abajo debe tener el jwt

//Obtener eventos del calendario}
router.get('/', getEventos);

//crear un nuevo evento
router.post('/', 
[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),   
    inputsValidator
],crearEvento);

//actualizar evento
router.put('/:id', actualizarEvento);

//borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;