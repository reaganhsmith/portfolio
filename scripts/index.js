
// Code to toggle the button and change color theme

const root = document.documentElement;
const toggleButton = document.getElementById("toggleButton");

let isButtonClicked = false;

toggleButton.addEventListener("click", () => {
    isButtonClicked = !isButtonClicked;

    if (isButtonClicked) {
        // This is for the new changes we want when the button is clicked

        
        root.style.setProperty('--dark-blue', '#E85FAD'); // Change to new colors
        root.style.setProperty('--green', '#FCE1C6'); // Change to new colors
        root.style.setProperty('--dark-pink', '#EE9BDD'); // Change to new colors
        root.style.setProperty('--light-pink', '#FFEAFB'); // Change to new colors
        root.style.setProperty('--cream', '#F5F1E7'); // Change to new colors
        root.style.setProperty('--dark-color', '#311107'); // Change to new colors

        toggleButton.classList.add("button-clicked");
    } else {
                // This is for the standard design We want saved 

                
        root.style.setProperty('--dark-blue', '#7BA1A9'); // Revert to original colorsired color
        root.style.setProperty('--green', '#E1E7D0'); // Revert to original colorsired text color
        root.style.setProperty('--dark-pink', '#E2C3C8'); // Revert to original colorsired text color
        root.style.setProperty('--light-pink', '#F4EDEE'); // Revert to original colorsired text color
        root.style.setProperty('--cream', '#F1F0E5'); // Revert to original colorsired text color
        root.style.setProperty('--dark-color', '#193338'); // Revert to original colorsired text color

        toggleButton.classList.remove("button-clicked");
    }
});
