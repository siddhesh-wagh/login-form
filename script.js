document.addEventListener("DOMContentLoaded", () => {
  // LOGIN FORM
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (username && password) {
        // Optional validation here
        window.location.href = "https://siddhesh-wagh.github.io/portfolio/";
      } else {
        alert("Please fill in both fields.");
      }
    });
  }

  // SIGNUP FORM
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("signupUsername").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Signup successful! Redirecting to login...");
      window.location.href = "login.html";
    });
  }

  // Simple email validator
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
