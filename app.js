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

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];
// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url("./assets/${headDropdown.value}-head.png")`;
    headCount++;

    // get the value of the head dropdown
    // increment the head change count state
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url("./assets/${middleDropdown.value}-middle.png")`;
    middleCount++;
    // get the value of the middle dropdown
    // increment the middle change count state
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url("./assets/${bottomDropdown.value}-pants.png")`;
    bottomCount++;
    // get the value of the bottom dropdown
    // increment the bottom change count state
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    catchphrases.push(catchphraseInput.value);
    displayCatchphrases();

    // get the value of the catchphrase input
    // push the new catchphrase to the catchphrase array in state
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
    reportEl.textContent = headCount;
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const newCatchphrase = document.createElement('p');
        newCatchphrase.textContent = catchphrase;

        catchphrasesEl.append(newCatchphrase);
    }

    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
