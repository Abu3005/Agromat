exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  console.log("Form submission received:", body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful!" }),
  };
};
