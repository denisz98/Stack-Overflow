const {response, request} = require('express');

const usuariosGet = (req, res = response) => {


    const query = req.query;

    res.json({
        msg:'get API - controlador',
        query
    });
}

const usuariosPut = (req = request, res = response) => {
 
    const {id} = req.params;


    res.json({
        msg:'put API - controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre,edad} = req.body;

    res.json({
        msg:'get API - controlador',
        nombre,
        edad
        
    });
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg:'get API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg:'get API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}