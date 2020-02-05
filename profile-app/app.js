// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// import https module from node using the require function
const https = require("https");

const username = "camshan5";

// Function to print message to console
const printMessage = (username, badgeCount, points) => {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
};

// Connect to the API URL (https://teamtreehouse.com/camshan5.json)
const request = https.get(
  `https://teamtreehouse.com/${username}.json`,
  response => {
    console.log(response.statusCode);

    // Read the data
    // Parse the data
    // Print the data
  }
);
