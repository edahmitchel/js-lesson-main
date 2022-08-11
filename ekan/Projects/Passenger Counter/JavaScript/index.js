'Use Strict'
//Variabale declaration
let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("Count-Element")

//Function to increment count by 1 everytime button is clicked
function incrementCount() {
    count += 1;
    countEl.innerText = count;
}

//Function to save the count value and render it onto screen via a paragraph element
function save() {
    let liveCount = count + " - ";
    saveEl.textContent += liveCount;
    console.log(count);
    count = 0;
    countEl.innerText = count;
}

function evenOrOdd() {
    if (num1%2 == 0) {
        alert("The number is even");
    }
    else {
        alert("The number is odd")
    }
}

evenOrOdd();