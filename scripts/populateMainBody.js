const pageTitle = document.createElement('h1');
const bodyBar = document.getElementsByClassName('bodyBar').item(0);
// Set the text content of the h1 element wiith current page title.
pageTitle.textContent = document.title;
// Append the h1 element to the bodyBar id.
bodyBar.appendChild(pageTitle);
bodyBar.appendChild(document.createElement('hr'));
// flush memory.
