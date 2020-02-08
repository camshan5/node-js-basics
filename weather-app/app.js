const weather = require("./weather");
const query = process.argv.slice(2);

lat = query[0];
lon = query[1];

weather.get(lat, lon);
