const fetchSubmissions = async () => {
  const url = "https://agromat.netlify.app/.netlify/functions/form-handler"; // Forms endpoint
  const token = "nfp_usSdYPqKSPEv18yDZXHXzNt5KBXnY16t526b"; // Replace with your token

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    // Fetch form data
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const forms = await response.json(); // No need to JSON.parse()
    console.log(forms);

    // Find the specific form by name
    const userForm = forms.find((form) => form.name === "userForm");

    if (userForm) {
      const submissionsResponse = await fetch(
        `${url}/${userForm.id}/submissions`,
        { headers }
      );

      if (!submissionsResponse.ok) {
        throw new Error(`HTTP error! Status: ${submissionsResponse.status}`);
      }

      const submissions = await submissionsResponse.json(); // No need to JSON.parse()
      console.log(submissions);

      // Render data on the page
      displaySubmissions(submissions);
    } else {
      console.error("Form not found.");
    }
  } catch (error) {
    console.error("Error fetching submissions:", error.message);
  }
};
