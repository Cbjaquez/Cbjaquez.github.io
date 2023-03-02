document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var formData = new FormData(event.target);

    var queryStr = "user=" + encodeURIComponent(username) + "&pass=" + encodeURIComponent(password);

    if (username === "Layne" && password === "111111") {
      var flag = "BST{BR_U73_F0RC3}";
      message.innerHTML = "Correct username and password!! the flag is " + flag;
      queryStr += "&flag=" + encodeURIComponent(flag);
    } else {
      message.innerHTML = "Incorrect username and/or password";
    }

    setTimeout(function() {
      window.location.search = queryStr;
    }, 3000);
  });
});
