/* Selecting the elements from the HTML file. */
const dice = document.querySelector(".Dice");
const adviceNum = document.querySelector("#Advice-Num");
const adviceQuote = document.querySelector("#Advice-Quote");

/**
 * Function to fetche the data from the API, then parses the data into JSON, then gets
 * the advice slip, then gets the id and advice, then displays the id and advice in the HTML, then
 * catches any errors.
 */
function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = "#" + data.id;
        adviceQuote.textContent = '"' + data.advice + '"';
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}

/* Adding an event listener to the dice element, so when the dice is clicked, the showQuote function is
called. */
dice.addEventListener("click", function(){showQuote();});