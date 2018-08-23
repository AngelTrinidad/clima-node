const axios = require('axios');

const getLugarLatLng = async(direccion) => {
  let addressEncoded = encodeURI(direccion);
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`;
  let res = await axios.get(url);

  if(res.status !== 200) throw new Error('Error al realizar el request en getLugarLatLng');

  if(res.data.status === 'ZERO_RESULTS'){
    throw new Error('Dirección no encontrada', direccion);
  }

  let location = res.data.results[0];
  let coords = location.geometry.location;

  return {
    direccion: location.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }
}

module.exports = {
  getLugarLatLng
}
