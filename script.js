// Basic user data (temporary demo)
const userData = {
  name: "MR COOL",
  email: "mrcool@example.com",
  points: 1250,
  completedCourses: ["Intro to TON", "Web3 Essentials"],
};

// Show profile data
function loadProfile() {
  const container = document.querySelector(".profile-info");
  if (container) {
    container.innerHTML = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Completed Courses:</strong> ${userData.completedCourses.length}</p>
        <p><strong>Points:</strong> ${userData.points}</p>
      `;
  }
}

// Load certificates
function loadCertificates() {
  const certSection = document.querySelector(".certificate");
  if (certSection) {
    userData.completedCourses.forEach((course, index) => {
      const certCard = document.createElement("div");
      certCard.className = "cert-card";
      certCard.innerHTML = `
          <h3>${course}</h3>
          <p>Issued on: April ${5 + index}, 2025</p>
          <button>View Certificate</button>
        `;
      certSection.appendChild(certCard);
    });
  }
}

// Load on page ready
window.addEventListener("DOMContentLoaded", () => {
  loadProfile();
  loadCertificates();
});
