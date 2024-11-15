const handler = async (event) => {
  if (event.httpMethod === "POST") {
    try {
      // Parse the incoming form data
      const body = JSON.parse(event.body);

      // Log the incoming data to check if it’s being received properly
      console.log("Received data:", body);

      // Get the current stored submissions from the environment variable (you might want to use a persistent storage solution like a database in production)
      const submissions = JSON.parse(process.env.SUBMISSIONS || "[]");

      // Push the new form submission
      submissions.push(body);

      // Save the updated submissions array (simulating storing to persistent storage here)
      process.env.SUBMISSIONS = JSON.stringify(submissions);

      // Log for debugging purposes
      console.log("Updated submissions:", submissions);

      // Return a success response
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submission successful" }),
      };
    } catch (error) {
      // Log the error to see the exact cause
      console.error("Error processing form submission:", error);

      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Error processing form",
          error: error.message,
        }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }
};

export { handler };
