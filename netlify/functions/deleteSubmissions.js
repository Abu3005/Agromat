const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { id } = JSON.parse(event.body);
  const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;

  const response = await fetch(
    `https://api.netlify.com/api/v1/submissions/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    return { statusCode: 200, body: "Submission deleted successfully" };
  }

  return { statusCode: 400, body: "Failed to delete submission" };
};

// exports.handler = async (event, context) => {
//   try {
//     // Ensure the request is a POST request
//     if (event.httpMethod !== "POST") {
//       return {
//         statusCode: 405, // Method Not Allowed
//         headers: { Allow: "POST" },
//         body: JSON.stringify({ error: "Method Not Allowed" }),
//       };
//     }

//     // Parse the request body
//     const data = JSON.parse(event.body);

//     // Validate input data
//     if (!data.name || !data.email) {
//       return {
//         statusCode: 400, // Bad Request
//         body: JSON.stringify({
//           error: "Missing required fields: name or email",
//         }),
//       };
//     }

//     // Simulate storing data (e.g., saving to a database or file)
//     console.log("Form Data Received:", data);

//     // Successful response
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Form submission successful!",
//         receivedData: data,
//       }),
//     };
//   } catch (error) {
//     console.error("Error processing form submission:", error);

//     return {
//       statusCode: 500, // Internal Server Error
//       body: JSON.stringify({
//         error: "Internal Server Error",
//         details: error.message,
//       }),
//     };
//   }
// };
