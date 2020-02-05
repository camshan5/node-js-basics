// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Docs URL === https://nodejs.org/dist/latest-v13.x/docs + Docs Endpoint

// import https module from node using the require function
const https = require("https");

// Function to print message to console
const printMessage = (username, badgeCount, points) => {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
};

// Function wrapper to get the user profile/ username
function getProfile(username) {
  // Connect to the API URL (https://teamtreehouse.com/camshan5.json)
  const request = https.get(
    `https://teamtreehouse.com/${username}.json`,
    response => {
      let body = "";

      // Read the Data:
      // Docs: api/https.html#https_https_get_url_options_callback
      response.on("data", data => {
        // process.stdout.write(data); // returns JSON
        body += data.toString();
      });

      // End Handler
      response.on("end", () => {
        // Parse the Data:
        const profile = JSON.parse(body);

        // Print the Data:
        printMessage(
          // returns the badge count and JavaScript points
          // using indexer opposed to dot notation to access the objects.
          username,
          profile["badges"].length,
          profile.points["JavaScript"]
        );
      });
    }
  );
}

// const users = ["camshan5", "chalkers", "davemcfarland", "alenaholligan"];

// use `node app.js camshan5 chalkers etc` to add the args (names) to the array
// Note: argv is an array property
const users = process.argv.slice(2); // starts at the 3rd member of the array

// use forEach function to loop through the array
// users.forEach passes in the parameter used by getProfile()
users.forEach(getProfile);
