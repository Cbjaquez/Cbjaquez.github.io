function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "Layne" && password === "password123") {
      alert("Good job, the password is 'password123'! here is the flag: BST{BR_U73_F0RC3}");
      return true;
    } else {
      alert("Incorrect username or password!");
      return false;
    }
}