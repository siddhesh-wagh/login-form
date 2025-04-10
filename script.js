document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
  
      // Optionally get input values
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
  
      // You can add basic validation here if you want
      if (username && password) {
        // Redirect to your portfolio
        window.location.href = "https://siddhesh-wagh.github.io/portfolio/";
      } else {
        alert("Please fill in both fields.");
      }
    });
  });
  