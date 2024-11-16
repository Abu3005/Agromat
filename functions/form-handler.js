exports.handler = async (event, context) => {
  try {
    // Ensure the request is a POST request
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405, // Method Not Allowed
        headers: { Allow: "POST" },
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    // Parse the request body
    const data = JSON.parse(event.body);

    // Validate input data
    if (!data.name || !data.email) {
      return {
        statusCode: 400, // Bad Request
        body: JSON.stringify({
          error: "Missing required fields: name or email",
        }),
      };
    }

    // Simulate storing data (e.g., saving to a database or file)
    console.log("Form Data Received:", data);

    // Successful response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form submission successful!",
        receivedData: data,
      }),
    };
  } catch (error) {
    console.error("Error processing form submission:", error);

    return {
      statusCode: 500, // Internal Server Error
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};
