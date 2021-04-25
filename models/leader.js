const { v4: uuidv4 } = require('uuid'); // Desustructurar y Asignar nombre

class Leader {

    constructor( name = 'Name', value = 0, volume = 0.0 ) {
        this.id = uuidv4();
        this.name = name;
        this.value = value;
        this.volume = volume;
    }
}

module.exports = Leader;