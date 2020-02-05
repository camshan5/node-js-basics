// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require("https");

// Function to print message to console
const printMessage = (username, badgeCount, points) => {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
};

const getProfile = username => {
  // Connect to the API URL
  const request = https.get(
    `https://teamtreehouse.com/${username}.json`,
    response => {
      let body = "";

      // Read the Data:
      response.on("data", data => {
        body += data.toString();
      });

      response.on("end", () => {
        // Parse the Data:
        const profile = JSON.parse(body);

        // Print the Data:
        printMessage(
          username,
          profile["badges"].length,
          profile.points["JavaScript"]
        );
      });
    }
  );
};

// Note: argv is an array property
const users = process.argv.slice(2); // index 3 start

users.forEach(getProfile);
