const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();


let cpu_string = JSON.stringify(cpu);
fs.appendFile('caracteristicas_procesador.txt',`La informacion de el procesador de nuestro equipo es: ${cpu_string} `, function(error){
    if(error){
        console.log('Error al crear archivo');
    }    
});