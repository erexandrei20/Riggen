const generateBtn = document.getElementById("generateBtn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const colorInput = document.getElementById("color");
const profileOutput = document.getElementById("profileOutput");

generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const color = colorInput.value.trim();

  if (!name || !age || !color) {
    profileOutput.innerHTML = `<p style="color: red;">⚠ Please fill in all fields.</p>`;
    return;
  }

  profileOutput.innerHTML = `
    <div style="border: 1px solid #ccc; padding: 10px; border-radius: 8px; max-width: 250px;">
      <h3>${name}</h3>
      <p>Age: ${age}</p>
      <p style="color: ${color};">Favorite Color: ${color}</p>
    </div>
  `;
});
