// Automatically translate page to sleected language.
document.addEventListener("DOMContentLoaded", function() {
    const htmlElement = document.documentElement;
    translatePage(htmlElement);
});

// Get the div element with the headingBar class.
const headingBar = document.querySelector('.headingBar');

// English.
const englishImg = document.createElement('img');
englishImg.id = 'languageSelect';
englishImg.src = 'images/icons/english.png';
englishImg.alt = 'English';
englishImg.title = 'English';
englishImg.addEventListener("click", () => {
    translatePage("en"); // Call the translatePage function with the language code 'en' when the image is clicked
});

// Cornish.
const cornishImg = document.createElement('img');
cornishImg.id = 'languageSelect';
cornishImg.src = 'images/icons/cornish.png';
cornishImg.alt = 'Cornish';
cornishImg.title = 'Cornish';
cornishImg.addEventListener("click", () => {
    translatePage("kw"); // Call the translatePage function with the language code 'en' when the image is clicked
});


// Spanish.
const spanishImg = document.createElement('img');
spanishImg.id = 'languageSelect';
spanishImg.src = 'images/icons/spanish.png';
spanishImg.alt = 'Spanish';
spanishImg.title = 'Spanish';

// Add images onto bar.
headingBar.appendChild(englishImg);
headingBar.appendChild(cornishImg);
headingBar.appendChild(spanishImg);


// This function has grown to become mega ugly. Please ingore it this should not be this big.
function translatePage(selectedLanguage){
    const pageTitle = document.title;
    switch(pageTitle) {
        // If it is the homepage.
        case "Dazawassa":
            // Query selector to grab all elements with text in them.
            const introductionLineOne = document.querySelector('#introductionLineOne');
            const introductionLineTwo = document.querySelector('#introductionLineTwo');
            const projectsTitle = document.querySelector('#projectsTitle');
            const projectsText = document.querySelector('#projectsText');
            const personalProjects = document.querySelector('#personalProjects');
            const groupProjects = document.querySelector('#groupProjects');
            const contactSection = document.querySelector('#contactSection');
            const contactText = document.querySelector('#contactText');
            // Pull HTML tag to change the language.
            const htmlElement = document.documentElement;
            switch(selectedLanguage) {
                case "kw":
                    // Set HTML tag top Cornish.
                    htmlElement.setAttribute('lang', 'kw');
                    // Sets text.
                    introductionLineOne.textContent = "Meur yw Darcy ow leverel, gans an gwaytyans Dazawassa. Methevenn ywghans ow tennañ orth ober vydhans delvedhek gernewek, ha mes a vydhans gwariet gans an unyversita, yth esa ow lesya skeul an kod ha komprenya ow projyekow. Yth esa me a-dro dhe sostenya software agor-dewgh, ha leverel a vydhans meur a'm programow agor-dewgh. Gwrewgh forka dhown oll an projyekow a'n leverel, gwella agan sewya, pe kavos bosythas. Yth ywghans, me a'n encourage dhe wul agan ober.";
                    introductionLineTwo.textContent = "Dhe'n kylmweyth, yth ywghans ow lesya gans yethyogyon. Mes yth esa me ow leverel kemeres dhe skoodhya yn Sowsnek yn unydh. Yth ywghans ow leverel Spanyek gans gwell oll ha yth esa me ow skoodhya Spanyek warbarth ha'n prys. Yth ywghans dhiskwedhes Hebrew ha Russek bys dhe'n pella past yn dhyski. Yn benn a'n ober ma, yth ywghans studhya Franzek ha Swedek.";
                    projectsTitle.textContent = "Ragdresow";
                    projectsText.textContent = "Yth ywghans ow oberi warbarth a projyekow a'n amserow dhe'n leverell, ha dhe'n bÿs dhe'n leverell a'n jynnweyth. Nessa dhe'n lyver ma, yth ywghans bos kavos roll a projyekow y'm ober a-dro dhe'n oberel. Nyns ywghans ny dewis aga lyverel, mes ny a dhevos agan oberel y'n kevrennenn. Ha dhe'n bÿs dhe'n ober ma, yth ywghans oberi projyekow gans agan eusow mar pleg.";
                    personalProjects.textContent = "Projyekow Personel";
                    groupProjects.textContent = "Projyekow Grup";
                    contactSection.textContent = "Kontaktya";
                    contactText.contactText = "Myngha, mewn mar pleg, ma y fydh bos gwari ow keskows! Yn furv dre weles, ny yw ow skrifa ow tus an socyal media kyns, mes yth esow plasow dhe'm dyski, mes yn furv dre yma moy esedhvos a-dro dhe'n conversation profesiynel ha diras. Ow kavos y foneg e-bost ow tus an conversation profesiynel ha diras mar pleg.";
                    break;
                case "es":
                    // code block
                    break;
                // Default would be English.
                default:
                    // Set HTML tag to English.
                    htmlElement.setAttribute('lang', 'en');
                    // Sets Text.
                    introductionLineOne.textContent = "My name is Darcy, also known as Dazawassa. I've been passionate about software development for a long time, and even though I'm currently busy with university, I still enjoy writing code and sharing my projects. I'm a big fan of open source software, and most of my programs are open source. Feel free to fork any of my projects, edit them, or give me feedback. In fact, I encourage you to do so!";
                    introductionLineTwo.textContent = "Outside of tech I enjoy linguistics. While I would only consider myself fluent in English. I do speak Spanish frequently and have since a child. I also learned some Hebrew and Russian from a past boyfriend. Along with having studied French and Swedish.";
                    projectsTitle.textContent = "Projects";
                    projectsText.textContent = "I have worked on many projects over time and will continue to do so in the future. Below you can find a list of projects I have done work for. Both projects developed by myself. And developed with a team.";
                    personalProjects.textContent = "Personal Projects";
                    groupProjects.textContent = "Group Projects";
                    contactSection.textContent = "Contact";
                    contactText.contactText = "If you have a desire to contact me I would be happy to talk! Officially I am not very active on social media but I do have places where I will post. I also have an E-Mail for a more professional and direct conversation if needed.";
            }
            break;
        // Else.
        default:
            // Code for the personal projects page.
    }
}

// Run translatePage function.
translatePage("en");