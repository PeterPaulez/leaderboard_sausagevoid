const { response } = require('express');
const Leader = require('../models/leader');
const { guardarArchivo, leerArhivo } = require('../helpers/database');

const cargarFileBD = ( fileDB = [] ) => {
    leaders = {};
    fileDB.forEach(leader => {
        leaders[leader.id] = leader;
    });
    return leaders;
} 

const listadoArray = ( objecto = {} ) => {
    const listado = [];
    Object.keys(objecto).forEach( key => {
        const leader = objecto[key];
        listado.push( leader );
    });
    return listado;
}


const leadersList = async ( _, answer = response ) => {
    const fileDB = leerArhivo();
    const ranking = cargarFileBD(fileDB);

    answer.json({
        ok: true,
        ranking
    });
}

const leadersAdd = async ( request, answer = response ) => {
    const { name, value, volume } = request.body;
    const leader = new Leader( name, value, volume );
    const fileDB = leerArhivo();
    let leaders = cargarFileBD( fileDB );
    leaders[leader.id] = leader;
    const listado = listadoArray( leaders );
    guardarArchivo( listado );

    answer.json({
        ok: true,
        msg: 'Guardado OK'
    });
}

module.exports={
    leadersList,
    leadersAdd
}