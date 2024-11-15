// netlify/functions/get-submissions.js

const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const siteId = "YOUR_SITE_ID"; // Replace with your Netlify site ID
  const formId = "user-information"; // Replace with your form name
  const apiToken = process.env.NETLIFY_API_TOKEN; // Set in Netlify environment variables

  const url = `https://api.netlify.com/api/v1/sites/${siteId}/forms/${formId}/submissions`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
