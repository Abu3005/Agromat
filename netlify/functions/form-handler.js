exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  console.log("Form submission received:", body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful!" }),
  };
};

const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  // Example of making a fetch request
  const apiResponse = await fetch("https://api.example.com/data", {
    method: "GET",
  });

  const apiData = await apiResponse.json();

  console.log("Form submission received:", body);
  console.log("API Data:", apiData);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful!" }),
  };
};

require("dotenv").config();

exports.handler = async (event) => {
  const apiKey = process.env.API_KEY;

  // Use your API key for something, e.g., an API request
  console.log("API Key:", apiKey);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Environment variable loaded!" }),
  };
};
