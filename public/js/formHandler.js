document.addEventListener("DOMContentLoaded", () => {
  async function fetchSubmissions() {
    const response = await fetch("/.netlify/functions/getSubmissions");
    const submissions = await response.json();

    const table = document.getElementById("submissionsTable");
    submissions.forEach((submission) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${submission.data.name}</td>
        <td>${submission.data.email}</td>
        <td>${submission.data.phone}</td>
        <td>
          <button onclick="deleteSubmission('${submission.id}')">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  }

  async function deleteSubmission(id) {
    await fetch("/.netlify/functions/deleteSubmission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    location.reload(); // Refresh the table after deletion
  }

  fetchSubmissions();
});
