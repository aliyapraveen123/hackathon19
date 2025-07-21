function checkPassword() {
    const input = document.getElementById("password").value.trim();
  
    if (input === "12345") {
      alert(" Door Opened!");
      window.location.href = "puzzle2.html";
    } else {
      alert(" Wrong password. Try again!");
    }
  }
