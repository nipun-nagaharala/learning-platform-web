function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Dummy login check
  if (user === "admin" && pass === "1234") {
    document.getElementById("../Dashboard/Admin Panel/new.html").style.display = "none";
    
  } else {
    alert("Invalid credentials");
  }
}
<a href="../Dashboard/Admin Panel/new.html"></a>