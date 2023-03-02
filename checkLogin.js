document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    var formData = new FormData(event.target);

    if (username === "Layne" && password === "111111") {
      message.innerHTML = "Correct username and password!! the flag is BST{BR_U73_F0RC3}";
    } else {
      message.innerHTML = "Incorrect username and/or password";
    }
  });
});
