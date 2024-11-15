export const handler = async (event) => {
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body);

      // Log the received data (process it as needed)
      console.log("Received form data:", body);

      // Here, handle saving or any further processing
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submission successful" }),
      };
    } catch (error) {
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
