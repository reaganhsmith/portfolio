
// Code to toggle the button and change color theme

// Select the images 

const cats = document.querySelector(".cats");
const logo = document.querySelector(".logo");
const arrow = document.querySelector(".arrow");
const cherries = document.querySelector("#cherries");
const star = document.querySelector("#star");
const car = document.querySelector("#car");
const oar = document.querySelector("#oars");
const fish = document.querySelector("#fish");
const smiley = document.querySelector("#smiley");
const circus = document.querySelector("#circus");

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

        cats.src = "images/ccimages/cats.png";
        arrow.src = "images/ccimages/arrow.png"
        cherries.src = "images/ccimages/cherry.png";
        star.src = "images/ccimages/star.png"
        car.src = "images/ccimages/car.png";
        oar.src = "images/ccimages/oar.png"
        fish.src = "images/ccimages/fish.png";
        smiley.src = "images/ccimages/smiley.png";
        circus.src = "images/ccimages/circus.png";
        logo.src = "images/ccimages/logo.png";

        toggleButton.classList.add("button-clicked");
    } else {
                // This is for the standard design We want saved 

                
        root.style.setProperty('--dark-blue', '#7BA1A9'); // Revert to original colorsired color
        root.style.setProperty('--green', '#E1E7D0'); // Revert to original colorsired text color
        root.style.setProperty('--dark-pink', '#E2C3C8'); // Revert to original colorsired text color
        root.style.setProperty('--light-pink', '#F4EDEE'); // Revert to original colorsired text color
        root.style.setProperty('--cream', '#F1F0E5'); // Revert to original colorsired text color
        root.style.setProperty('--dark-color', '#193338'); // Revert to original colorsired text color

        cats.src = "images/cats.png";
        arrow.src = "images/arrow.png";
        cats.src = "images/cats.png";
        arrow.src = "images/arrow.png"
        cherries.src = "images/bountiful.png";
        star.src = "images/starCC.png"
        car.src = "images/car.png";
        oar.src = "images/brokenOar.png"
        fish.src = "images/ocean.png";
        smiley.src = "images/madlib.png";
        circus.src = "images/zenGarden.png";
        logo.src = "images/ccimages/Logo.png";


        toggleButton.classList.remove("button-clicked");
    }
});
