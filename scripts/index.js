
// Code to toggle the button and change color theme

const root = document.documentElement;
const toggleButton = document.getElementById("toggleButton");

let isButtonClicked = false;

toggleButton.addEventListener("click", () => {
    isButtonClicked = !isButtonClicked;

    if (isButtonClicked) {
        
        root.style.setProperty('--dark-blue', '#E85FAD'); // Revert to original color
        root.style.setProperty('--green', '#FCE1C6'); // Revert to original color
        root.style.setProperty('--dark-pink', '#EE9BDD'); // Revert to original color
        root.style.setProperty('--light-pink', '#FFEAFB'); // Revert to original color
        root.style.setProperty('--cream', '#F5F1E7'); // Revert to original color
        root.style.setProperty('--dark-color', '#311107'); // Revert to original color
        toggleButton.classList.add("button-clicked");
    } else {
        root.style.setProperty('--dark-blue', '#7BA1A9'); // Change to desired color
        root.style.setProperty('--green', '#E1E7D0'); // Change to desired text color
        root.style.setProperty('--dark-pink', '#E2C3C8'); // Change to desired text color
        root.style.setProperty('--light-pink', '#F4EDEE'); // Change to desired text color
        root.style.setProperty('--cream', '#F1F0E5'); // Change to desired text color
        root.style.setProperty('--dark-color', '#193338'); // Change to desired text color
        toggleButton.classList.remove("button-clicked");
    }
});
