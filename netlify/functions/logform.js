const querystring = require("querystring");

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    // Parse URL-encoded form data
    const formData = querystring.parse(event.body);

    console.log("Form Submission Data:", formData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
};
