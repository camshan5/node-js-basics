const https = require("https");
const http = require("http");

const messages = require("./messages");

const getProfile = username => {
  try {
    // Connect to the API URL
    const request = https.get(
      `https://teamtreehouse.com/${username}.json`,
      response => {
        if (response.statusCode === 200) {
          let body = "";

          // Read the Data:
          response.on("data", data => {
            body += data.toString();
          });

          response.on("end", () => {
            try {
              // Parse the Data:
              const profile = JSON.parse(body);

              // Print the Data:
              messages.printMessage(
                username,
                profile["badges"].length,
                profile.points["JavaScript"]
              );
            } catch (error) {
              messages.printError(error);
            }
          });
        } else {
          const message = `There was an error getting the profile for ${username} (${
            http.STATUS_CODES[response.statusCode]
          })`;
          const statusCodeError = new Error(message);
          messages.printError(statusCodeError);
        }
      }
    );
    request.on("error", messages.printError);
  } catch (error) {
    messages.printError(error);
  }
};

// make getProfile accessible to other modules
module.exports.getProfile = getProfile;
