const fetchSubmissions = async () => {
  const url = "https://api.netlify.com/api/v1/forms"; // Forms endpoint
  const token = "nfp_usSdYPqKSPEv18yDZXHXzNt5KBXnY16t526b"; // Replace with your token

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    // Fetch form data
    const response = await fetch(url, { headers });
    const forms = await response.json();

    // Find the specific form by name
    const userForm = forms.find((form) => form.name === "userForm");

    if (userForm) {
      const submissionsResponse = await fetch(
        `${url}/${userForm.id}/submissions`,
        { headers }
      );
      const submissions = await submissionsResponse.json();
      console.log(submissions);

      // Render data on the page
      displaySubmissions(submissions);
    } else {
      console.error("Form not found.");
    }
  } catch (error) {
    console.error("Error fetching submissions:", error);
  }
};

const displaySubmissions = (submissions) => {
  const container = document.getElementById("submissions");
  submissions.forEach((submission) => {
    const div = document.createElement("div");
    div.textContent = `Name: ${submission.data.name}, Email: ${submission.data.email}`;
    container.appendChild(div);
  });
};

fetchSubmissions();
