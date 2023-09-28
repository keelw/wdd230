let lastModifiedString = new Date(document.lastModified);
oLastModif = lastModifiedString.toUTCString();
document.getElementById('lastModified').innerHTML = `Last modified: ${oLastModif}`;

let d = new Date();
let currentYear = d.getFullYear();
document.getElementById('copyRight').innerHTML = `&copy ${currentYear} William Keel &#127482;&#127480`;
