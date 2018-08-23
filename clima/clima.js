const axios = require('axios');

const getClima = async(lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7b8553069605be810f613f1b090038a8`;
  const res = await axios.get(url);

  if(res.status !== 200) throw new Error('Error al realizar el request en getClima');

  let main = res.data.main;

  return main.temp

}

module.exports = {
  getClima
}
