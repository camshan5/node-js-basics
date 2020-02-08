const http = require("http");
const https = require("https");
const api = require("../api.json");

// Print out temp details
const printWeather = weather => {
  const message = `The forecast for ${weather.latitude}, ${
    weather.longitude
  } is ${weather["hourly"]["summary"]}`;
  console.log(message);
};

// Print out error message
const printError = error => {
  console.error(error.message);
};

const get = (lat, lon) => {
  // Take out underscores for readability
  try {
    let url = `https://api.darksky.net/forecast/${api.key}/${lat},${lon}`;

    const request = https.get(url, response => {
      if (response.statusCode === 200) {
        let body = "";
        // Read the data
        response.on("data", chunk => {
          body += chunk;
        });
        response.on("end", () => {
          try {
            // Parse the data
            const weather = JSON.parse(body);
            // Check if the location was found before printing
            if (weather.latitude && weather.longitude) {
              // Print the data
              printWeather(weather);
            } else {
              const queryError = new Error(`The location was not found.`);
              printError(queryError);
            }
          } catch (error) {
            // Parse Error
            printError(error);
          }
        });
      } else {
        // Status Code Error
        const statusCodeError = new Error(
          `There was an error getting the message. (${
            http.STATUS_CODES[response.statusCode]
          })`
        );
        printError(statusCodeError);
      }
    });

    request.on("error", printError);
  } catch (error) {
    //Malformed URL Error
    printError(error);
  }
};

module.exports.get = get;
