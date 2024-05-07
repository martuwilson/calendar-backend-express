// user routes // auth ==> host+ /api/auth

const {Router} = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { inputsValidator } = require('../middlewares/inputsValidate');
const { validarJWT } = require('../middlewares/jwtValidate');

const router = Router();

router.post('/new', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({min:6}),
    inputsValidator
],createUser);

router.post('/', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({min:6}),
    inputsValidator
],loginUser);

router.get('/renew', validarJWT,revalidateToken);



module.exports = router;