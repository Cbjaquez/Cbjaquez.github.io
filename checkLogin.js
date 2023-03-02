document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var formData = new FormData(event.target);

    if (username === "Layne" && password === "111111") {
      window.location.href = "index.html?username=Layne&password=111111";
    } else {
      var query = "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
      var url = window.location.pathname + query;
      setTimeout(function() {
        location.replace(url);
      }, 2000); // 2-second delay before redirecting
      message.innerHTML = "Incorrect username and/or password";
    }
  });
});
