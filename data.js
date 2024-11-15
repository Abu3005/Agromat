//////////////// Local storage method  //////////////////////
//////////////// Local storage method  //////////////////////
//////////////// Local storage method  //////////////////////
//////////////// Local storage method  //////////////////////
//////////////// Local storage method  //////////////////////

// document.getElementById("myForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Get form values
//   const formData = {
//     personalInfo: {
//       fullName: document.getElementById("fullName").value,
//       phoneNumber: document.getElementById("phoneNumber").value,
//       emailAddress: document.getElementById("email").value,
//       address: document.getElementById("address").value,
//     },
//     education: {
//       highestLevel: document.getElementById("educationLevel").value,
//       graduationDate: document.getElementById("graduationDate").value,
//       institutionName: document.getElementById("institution").value,
//       city: document.getElementById("city").value,
//     },
//     workExperience: {
//       companyName: document.getElementById("companyName").value,
//       employmentDate: document.getElementById("employmentDate").value,
//       jobTitle: document.getElementById("jobTitle").value,
//       roleDescription: document.getElementById("roleDescription").value,
//     },
//     references: {
//       referenceName: document.getElementById("referenceName").value,
//       referenceNumber: document.getElementById("referenceNumber").value,
//       referenceEmail: document.getElementById("referenceEmail").value,
//       referenceAddress: document.getElementById("referenceAddress").value,
//     },
//     additionalInfo: {
//       languages: document.getElementById("languages").value,
//       canTravel: document.getElementById("canTravel").value,
//       canWorkWeekends: document.getElementById("canWorkWeekends").value,
//       expectedPerMonth: document.getElementById("expectedPerMonth").value,
//     },
//   };

//   // Get stored data (if any) from local storage
//   const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

//   // Add the new user data to the array
//   usersData.push(formData);

//   // Log the data to check
//   console.log(usersData);

//   // Save updated data back to local storage
//   localStorage.setItem("usersData", JSON.stringify(usersData));

//   alert("Form submitted successfully!");

//   // Optionally, you can reset the form
//   document.getElementById("myForm").reset();
// });

// // To veiw data
// const savedData = localStorage.getItem("usersData"); // Corrected key
// if (savedData) {
//   const usersData = JSON.parse(savedData);
//   console.log("Retrieved Form Data:", usersData);
// } else {
//   console.log("No data found in local storage.");
// }

// // To access values in data
// usersData.forEach((user, index) => {
//   console.log(`User ${index + 1}:`, user);
//   console.log("Personal Information:", user.personalInfo);
//   console.log("Education:", user.education);
//   console.log("Work Experience:", user.workExperience);
//   console.log("References:", user.references);
//   console.log("Additional Info:", user.additionalInfo);
// });

///////////////  NETLIFY API //////////////////
///////////////  NETLIFY API //////////////////
///////////////  NETLIFY API //////////////////
///////////////  NETLIFY API //////////////////

// Function to fetch submissions
async function fetchSubmissions() {
  try {
    const response = await fetch("/.netlify/functions/get-submissions");
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const submissions = await response.json();
    displaySubmissions(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    document.getElementById(
      "dataDisplay"
    ).innerHTML = `<p class="text-red-500">Error fetching submissions: ${error.message}</p>`;
  }
}

// Function to display submissions
function displaySubmissions(submissions) {
  const container = document.getElementById("dataDisplay");
  if (submissions.length === 0) {
    container.innerHTML = "<p>No submissions found.</p>";
    return;
  }

  submissions.forEach((submission, index) => {
    const userCard = document.createElement("div");
    userCard.classList.add("mb-6", "p-4", "border", "rounded", "shadow");
    userCard.innerHTML = `
          <h2 class="text-xl font-semibold mb-2">User ${index + 1}</h2>
          <p><strong>Full Name:</strong> ${submission.data.fullName}</p>
          <p><strong>Phone Number:</strong> ${submission.data.phoneNumber}</p>
          <p><strong>Email Address:</strong> ${submission.data.email}</p>
          <p><strong>Residential Address:</strong> ${
            submission.data.address
          }</p>
          <p><strong>Education Level:</strong> ${
            submission.data.educationLevel
          }</p>
          <p><strong>Graduation Date:</strong> ${
            submission.data.graduationDate
          }</p>
          <p><strong>Institution Name:</strong> ${
            submission.data.institution
          }</p>
          <p><strong>City:</strong> ${submission.data.city}</p>
          <p><strong>Company Name:</strong> ${submission.data.companyName}</p>
          <p><strong>Employment Date:</strong> ${
            submission.data.employmentDate
          }</p>
          <p><strong>Job Title:</strong> ${submission.data.jobTitle}</p>
          <p><strong>Role Description:</strong> ${
            submission.data.roleDescription
          }</p>
          <p><strong>Reference Name:</strong> ${
            submission.data.referenceName
          }</p>
          <p><strong>Reference Number:</strong> ${
            submission.data.referenceNumber
          }</p>
          <p><strong>Reference Email:</strong> ${
            submission.data.referenceEmail
          }</p>
          <p><strong>Reference Address:</strong> ${
            submission.data.referenceAddress
          }</p>
          <p><strong>Languages:</strong> ${submission.data.languages}</p>
          <p><strong>Can Travel for Work:</strong> ${
            submission.data.canTravel
          }</p>
          <p><strong>Salary Expectation per Month:</strong> ${
            submission.data.expectedPerMonth
          }</p>
          <p><strong>Can Work on Weekends:</strong> ${
            submission.data.canWorkWeekends
          }</p>
          <hr class="mt-4">
        `;
    container.appendChild(userCard);
  });
}

// Fetch submissions on page load
document.addEventListener("DOMContentLoaded", fetchSubmissions);
