const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');


let getInfo = async (direccion) => {
  try{
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${direccion} es de ${temp}c`;
  }catch(e){
    return `No se pudo determinar el clima en ${direccion}`;
  }
}

getInfo(argv.direccion)
  .then( mensaje => console.log(mensaje))
  .catch(err => console.log(e));
