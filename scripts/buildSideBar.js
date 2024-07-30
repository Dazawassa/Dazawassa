// Create a div element with the class "headerBar"
const headerBar = document.createElement('div');
headerBar.classList.add('headerBar');

// Array of text values
let sideBarLinks = {
    "Home": "index.html",
    "Projects": "projects.html",
    "Contact": "contact.html",
    "Support": "https://ko-fi.com/dazawassa"
  };

// Loop through the text values and create <p> elements with data-text attribute and an <a> tag inside of the <p> with a href attribute.
for (const label in sideBarLinks) {
    if (sideBarLinks.hasOwnProperty(label)) {
      const p = document.createElement('p');
      const a = document.createElement('a');
      // You know I have no idea how this knows I want to use the label variable here but it does. Thank you Charles.
      a.setAttribute('href', sideBarLinks[label]);
      a.textContent = label;
      p.appendChild(a);
      headerBar.appendChild(p);
    }
  }
  

// Append the "headerBar" div to the document body or any other desired location
document.body.appendChild(headerBar);
