const fs = require('fs');
const archivo = './db/database.json';


const guardarArchivo = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data)); // Guardadamos un array en modo Texto
}

const leerArhivo = () => {
    if ( !fs.existsSync(archivo) ) {
        return null;
    } 

    const info = fs.readFileSync(archivo, { encoding: 'utf-8'});
    const data = JSON.parse( info );

    return data;
}

module.exports = {
    guardarArchivo,
    leerArhivo,
}