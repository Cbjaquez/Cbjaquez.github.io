document.addEventListener("DOMContentLoaded", function() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var usernameParam = urlParams.get("username");
  var passwordParam = urlParams.get("password");
  if (usernameParam === "Layne" && passwordParam === "111111") {
    window.location.href = "success.html";
  }

  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var formData = new FormData(event.target);

    if (username === "Layne" && password === "111111") {
      window.location.href = "success.html?status=success";
    } else {
      var query = "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
      var url = window.location.pathname + query;
      setTimeout(function() {
        location.replace(url);
      }, 2000); 
      message.innerHTML = "Incorrect username and/or password";
    }
  });
});
