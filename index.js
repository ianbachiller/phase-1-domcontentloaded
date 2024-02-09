document.addEventListener("DOMContentLoaded", function() {
    const a = document.getElementById("text")
    a.textContent = "This is really cool!"
  });
  
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );