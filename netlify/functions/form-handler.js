// form-handler.js
const handler = async (event) => {
  if (event.httpMethod === "POST") {
    try {
      // Parse the incoming form data
      const body = JSON.parse(event.body);

      // Store the submission in an array
      const submissions = JSON.parse(process.env.SUBMISSIONS || "[]");

      // Push the new form submission
      submissions.push(body);

      // Save the updated submissions array to the environment or to your persistent storage (this example uses the environment variable, in a production setup, this would likely go to a database)
      process.env.SUBMISSIONS = JSON.stringify(submissions);

      // Log for debugging
      console.log("Form submitted:", body);

      // Return a success response
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submission successful" }),
      };
    } catch (error) {
      console.error("Error processing form submission:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Error processing form" }),
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
