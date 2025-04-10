document.addEventListener("DOMContentLoaded", () => {
  // SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("signupUsername").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      // Validation rules
      const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,12}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/;

      if (!username || !email || !password) {
        alert("Please fill all fields.");
        return;
      }

      if (!usernameRegex.test(username)) {
        alert("Username must be max 12 characters, with at least 1 uppercase letter, 1 lowercase letter, and 1 number.");
        return;
      }

      if (!passwordRegex.test(password)) {
        alert("Password must be 8–12 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
        return;
      }

      // Store credentials in localStorage
      localStorage.setItem("user", JSON.stringify({ username, email, password }));

      alert("Signup successful!");
      window.location.href = "index.html"; // Redirect to login
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        username === storedUser.username &&
        password === storedUser.password
      ) {
        alert("Login successful!");
        window.location.href = "https://siddhesh-wagh.github.io/portfolio/";
      } else {
        alert("Invalid username or password.");
      }
    });
  }

  // FORGOT PASSWORD
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault();

      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
      }

      const inputUsername = prompt("Enter your username to reset your password:");

      if (inputUsername === storedUser.username) {
        const newPassword = prompt("Enter a new password (8–12 chars, at least 1 uppercase, lowercase, number & symbol):");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/;
        if (!passwordRegex.test(newPassword)) {
          alert("Invalid password format. Try again.");
          return;
        }

        storedUser.password = newPassword;
        localStorage.setItem("user", JSON.stringify(storedUser));
        alert("Password reset successful! Please log in with your new password.");
      } else {
        alert("Username not found.");
      }
    });
  }
});
