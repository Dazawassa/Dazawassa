function translatePage(selectedLanguage){
    const pageTitle = document.title;
        // Query selector to grab all elements with text in them.
        const groupProjectsTitle = document.querySelector('#groupProjectsTitle');
        const groupProjectsText = document.querySelector('#groupProjectsText');
        // Pull HTML tag to change the language.
        const htmlElement = document.documentElement;
        switch(selectedLanguage) {
            case "kw":
                // Set HTML tag top Cornish.
                htmlElement.setAttribute("lang", "kw");
                // Sets text.
                groupProjectsTitle.textContent = "Ragdresow";
                groupProjectsText.textContent = "";
                break;
            case "es":
                // Set HTML tag to Spanish.
                htmlElement.setAttribute("lang", "es");
                // Sets text.
                groupProjectsTitle.textContent = "Proyectos";
                groupProjectsText.textContent = "He trabajado en muchos proyectos a lo largo del tiempo y seguiré haciéndolo en el futuro. A continuación, puedes encontrar una lista de proyectos en los que he trabajado, tanto en proyectos desarrollados por mí mismo como en aquellos desarrollados en equipo.";
            // Default would be English.
            default:
                // Set HTML tag to English.
                htmlElement.setAttribute("lang", "en");
                // Sets Text.
                groupProjectsTitle.textContent = "Projects";
                groupProjectsText.textContent = "Diwettha dhe'n rol ma yw roll projyekow a vynnas bos oberys war an termyn, po bos gwrthywesys gans omglers.";
            break;
        }      
}