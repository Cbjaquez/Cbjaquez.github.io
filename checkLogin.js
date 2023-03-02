document.addEventListener("DOMContentLoaded", function() {
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
      location.replace(url);
      message.innerHTML = "Incorrect username and/or password";
    }
    
    setTimeout(function() {
      window.location.search = queryStr;
    }, 3000);
  });
});
