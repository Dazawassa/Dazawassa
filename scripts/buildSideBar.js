// Create a div element with the class "headerBar"
var headerBar = document.createElement('div');
headerBar.classList.add('headerBar');
// Array of text values
var sideBarLinks = {
    "Home": "index.html",
    "Tools": "tools.html",
    "Mods": "mods.html",
    "Contact": "contact.html",
    "Support": "https://ko-fi.com/dazawassa"
};
// Loop through the text values and create <p> elements with data-text attribute and an <a> tag inside of the <p> with a href attribute.
for (var label in sideBarLinks) {
    if (sideBarLinks.hasOwnProperty(label)) {
        var p = document.createElement('p');
        var a = document.createElement('a');
        // You know I have no idea how this knows I want to use the label variable here but it does. Thank you Charles.
        a.setAttribute('href', sideBarLinks[label]);
        a.textContent = label;
        p.appendChild(a);
        headerBar.appendChild(p);
    }
}
// Append the "headerBar" div to the document body or any other desired location
document.body.appendChild(headerBar);
//# sourceMappingURL=buildSideBar.js.map