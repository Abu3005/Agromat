const fetch = require("node-fetch");

exports.handler = async () => {
  const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
  const SITE_ID = process.env.NETLIFY_SITE_ID;

  const formsResponse = await fetch(`https://api.netlify.com/api/v1/forms`, {
    headers: {
      Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
    },
  });

  const forms = await formsResponse.json();
  const form = forms.find((f) => f.name === "myForm");

  if (form) {
    const submissionsResponse = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
        },
      }
    );

    const submissions = await submissionsResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify(submissions),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Form not found" }),
  };
};

// // netlify/functions/get-submissions.js

// // exports.handler = (event, context) => {
// //   return {
// //     statusCode: 200,
// //     body: "hello world",
// //   };
// // };

// const fetch = require("node-fetch");

// exports.handler = async (event, context) => {
//   const siteId = "022524ba-613e-4a15-b534-d22026b2807c"; // Replace with your Netlify site ID
//   const formId = "joinUs-User"; // Replace with your form name
//   const apiToken = process.env.NETLIFY_API_TOKEN; // Set in Netlify environment variables

//   const url = `https://api.netlify.com/api/v1/sites/${siteId}/forms/${formId}/submissions`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }

//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };

// const fetch = require("node-fetch");

// exports.handler = async () => {
//   const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN; // Set in environment variables
//   const SITE_ID = process.env.NETLIFY_SITE_ID; // Set in environment variables

//   const response = await fetch(`https://api.netlify.com/api/v1/forms`, {
//     headers: {
//       Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
//     },
//   });

//   const forms = await response.json();
//   const form = forms.find((f) => f.name === "user-form");

//   if (form) {
//     const submissions = await fetch(
//       `https://api.netlify.com/api/v1/forms/${form.id}/submissions`,
//       {
//         headers: {
//           Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
//         },
//       }
//     );

//     const data = await submissions.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   }

//   return {
//     statusCode: 404,
//     body: JSON.stringify({ message: "Form not found" }),
//   };
// };
