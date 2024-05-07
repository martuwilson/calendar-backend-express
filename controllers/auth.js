const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Users');
const generarJWT = require('../helpers/jwt');

const createUser = async(req, res = response) => {

    const {email} = req.body

 try {
    let usuario = await Usuario.findOne({email});

    if(usuario){
        return res.status(400).json({
            ok: false,
            msg: 'A user already exists with that email'
        });
    }

    usuario = new Usuario(req.body);

    //encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(usuario.password, salt);

    await usuario.save();

    //generar el JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
        ok: true,
        msg: 'User created',
        uid: usuario.id,
        name: usuario.name,
        token
    });
 } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact the administrator'
        });
 }
    
}

const loginUser = async(req, res = response) => {

    const {email, password} = req.body;

    try {

        let usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'The user does not match with that email'
            });
        }

        //confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect password'
            });
        }

        //generar el JWT
        const token = await generarJWT(usuario.id, usuario.name);


        return res.json({
            ok: true,
            msg: 'login',
           uid: usuario.id,
           name: usuario.name,
           token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact the administrator'
        });
    }

    
}

const revalidateToken = async(req, res = response) => {

    const uid = req.uid
    const name = req.name

    //generar nuevo jwt y retornalo en esta petición
    const token = await generarJWT(uid, name);
    


    res.json({
        ok: true,
        uid: uid,
        name: name,
        token
    });
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken
}