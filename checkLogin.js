document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var formData = new FormData(event.target);

    if (username === "Layne" && password === "111111") {
      // Redirect to success page and display success message
      window.location.href = "success.html?status=success";
    } else {
      // Redirect to error page and display error message
      window.location.href = "error.html?status=error";
    }
  });
});
