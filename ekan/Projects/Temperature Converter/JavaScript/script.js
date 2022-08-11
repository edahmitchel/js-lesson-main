//Declaration of variables and assignments to query selectors
let converter = document.querySelector('#converter');
let result = document.querySelector('.result');
let evoke = document.querySelector('.evoke');
let highEvoke = document.querySelector('.high-evoke');
let convertButton = document.querySelector('.convertButton');
let resetButton = document.querySelector('.resetButton');
let changeButton = document.querySelector('.changeButton');
let C = document.querySelector('.C');
let F = document.querySelector('.F');
const celciusFever = 39;
const fahrenheitFever = 103;

//Function to switch between celcius and fahrenheit operations
function swap() {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        document.title = "Converter °F to °C";
        converter.placeholder = "°F";
    } 
    else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        document.title = "Converter °C to °F";
        converter.placeholder = "°C";
    }
}

//Function to clear screen
function reset () {
    converter.value = '';
    result.innerHTML = '';
    highEvoke.innerHTML = '';
    evoke.innerHTML = '';
}

function checkFever (val, x) {
    if (val > x) {          //Fever conditional
        alert("You have a fever");
        let childConfirm = confirm("Is the temperature for a child?");
        if (childConfirm) {
            let childAge = confirm("Is the child above the age of 3 months?");
            if (childAge) {
                highEvoke.innerHTML = "What to do if your child has a high temperature.";
                evoke.innerHTML = "1. Give them plenty of fluids. <br> 2. Look out for signs of dehydration. <br> 3. Give them food if they want it check on your child regularly during the night. <br> 4. Keep them at home. <br> 5. Give them paracetamol if they're distressed or unwell.";
            }
            else {
                evoke.innerHTML = "Visit your doctor.";
            }
        }
        else {
            highEvoke.innerHTML = "How to break a fever.";
            evoke.innerHTML = "1. Take your temperature and assess your symptoms. <br> 2. Stay in bed and rest. <br> 3. Keep hydrated. <br> 4. Stay cool. Remove extra layers of clothing and blankets, unless you have the chills.";
        }
    }
}

//Temprature conversion function with built in conditionals for checking fevers and issuing preventative measures for children and adults
function convert () {
    if (converter.value == '') {   //If user leaves label as empty space
        result.style.color = "red"
        result.innerHTML = 'Write correct value!';
    }
    else if (!isNaN(converter.value)) {      //Check that user typed a numeric value
        console.log(isNaN(convert.value) == isNaN());
        result.style.color = "yellow";
        evoke.style.color = "red";
        if (C.innerHTML === '°C') {     //Celcius to Fahrenheit conversion
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = converter.value + "°C to " + value.toFixed(2) + "°F";
            checkFever(value, fahrenheitFever);
        } 
        else {                          //Fahrenheit to Celcius conversion
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = converter.value + "°F to " + value.toFixed(2) + "°C";
            checkFever(value, celciusFever);
        }
    } 
    else {                              //If user inserts something that isn't a number
        result.style.color = "red"
        result.innerHTML = 'Wrong value!';
    }
}

//Event listeners for each button
changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);