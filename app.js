// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const nameEl = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];

displayStats();

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url("./assets/${headDropdown.value}-head.png")`;
    headCount++;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url("./assets/${middleDropdown.value}-middle.png")`;
    middleCount++;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url("./assets/${bottomDropdown.value}-pants.png")`;
    bottomCount++;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    catchphrases.push(catchphraseInput.value);
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have changed the head ${headCount} times. 
    You have changed the middle ${middleCount} times.
    You have changed the bottom ${bottomCount} times.`;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const newCatchphrase = document.createElement('p');
        newCatchphrase.textContent = catchphrase;

        catchphrasesEl.append(newCatchphrase);
    }
}

nameButton.addEventListener('click', () => {
    nameEl.textContent = nameInput.value;
});

// clear out the DOM for the currently displayed catchphrases
// loop through each catchphrase in state
// and for each catchphrase
// create an HTML element with the catchphrase as its text content
// and append that HTML element to the cleared-out DOM

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
// get the value of the head dropdown
// increment the head change count state
// update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
// update the stats to show the new count (call displayStats() to do this work)
// get the value of the catchphrase input
// push the new catchphrase to the catchphrase array in state
// clear out the form input's value so it's empty to the user
// update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
// text content of the reportEl to tell the user how many times they've changed each piece of the state
