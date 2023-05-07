// Automatically translate page to sleected language.
document.addEventListener("DOMContentLoaded", function() {
    const broswerLangugage = navigator.language;
    const htmlElement = document.documentElement;
    translatePage(broswerLangugage);
});

// Get the div element with the headingBar class.
const headingBar = document.querySelector('.headingBar');

// English.
const englishImg = document.createElement("img");
englishImg.id = "languageSelect";
englishImg.src = "images/icons/english.png";
englishImg.alt = "English";
englishImg.title = "English";
englishImg.addEventListener("click", () => {
    translatePage("en"); // Call the translatePage function with the language code 'en' when the image is clicked
});

// Cornish.
const cornishImg = document.createElement("img");
cornishImg.id = "languageSelect";
cornishImg.src = "images/icons/cornish.png";
cornishImg.alt = "Cornish";
cornishImg.title = "Cornish";
cornishImg.addEventListener("click", () => {
    translatePage("kw"); // Call the translatePage function with the language code "kw" when the image is clicked
});


// Spanish.
const spanishImg = document.createElement("img");
spanishImg.id = "languageSelect";
spanishImg.src = "images/icons/spanish.png";
spanishImg.alt = "Spanish";
spanishImg.title = "Spanish";
spanishImg.addEventListener("click", () => {
    translatePage("es"); // Call the translatePage function with the language code "es" when the image is clicked
});

// Add images onto bar.
headingBar.appendChild(englishImg);
headingBar.appendChild(cornishImg);
headingBar.appendChild(spanishImg);