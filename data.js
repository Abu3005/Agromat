document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const formData = {
    personalInfo: {
      fullName: document.getElementById("fullName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      emailAddress: document.getElementById("email").value,
      address: document.getElementById("address").value,
    },
    education: {
      highestLevel: document.getElementById("educationLevel").value,
      graduationDate: document.getElementById("graduationDate").value,
      institutionName: document.getElementById("institution").value,
      city: document.getElementById("city").value,
    },
    workExperience: {
      companyName: document.getElementById("companyName").value,
      employmentDate: document.getElementById("employmentDate").value,
      jobTitle: document.getElementById("jobTitle").value,
      roleDescription: document.getElementById("roleDescription").value,
    },
    references: {
      referenceName: document.getElementById("referenceName").value,
      referenceNumber: document.getElementById("referenceNumber").value,
      referenceEmail: document.getElementById("referenceEmail").value,
      referenceAddress: document.getElementById("referenceAddress").value,
    },
    additionalInfo: {
      languages: document.getElementById("languages").value,
      canTravel: document.getElementById("canTravel").value,
      canWorkWeekends: document.getElementById("canWorkWeekends").value,
      expectedPerMonth: document.getElementById("expectedPerMonth").value,
    },
  };

  // Get stored data (if any) from local storage
  const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

  // Add the new user data to the array
  usersData.push(formData);

  // Log the data to check
  console.log(usersData);

  // Save updated data back to local storage
  localStorage.setItem("usersData", JSON.stringify(usersData));

  alert("Form submitted successfully!");

  // Optionally, you can reset the form
  document.getElementById("myForm").reset();
});

// To veiw data
const savedData = localStorage.getItem("usersData"); // Corrected key
if (savedData) {
  const usersData = JSON.parse(savedData);
  console.log("Retrieved Form Data:", usersData);
} else {
  console.log("No data found in local storage.");
}

// To access values in data
usersData.forEach((user, index) => {
  console.log(`User ${index + 1}:`, user);
  console.log("Personal Information:", user.personalInfo);
  console.log("Education:", user.education);
  console.log("Work Experience:", user.workExperience);
  console.log("References:", user.references);
  console.log("Additional Info:", user.additionalInfo);
});
