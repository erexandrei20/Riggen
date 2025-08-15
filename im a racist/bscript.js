let isDark = false; 
const button = document.getElementById("toggleThemeBtn");

button.addEventListener("click", () => {
  if (isDark) {
    
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    button.textContent = "Switch to Dark Mode";
  } else {
    
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
    button.textContent = "Switch to Light Mode";
  }

 
  isDark = !isDark;
});
