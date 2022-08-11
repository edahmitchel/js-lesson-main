console.log(7<3 && 4>3 || 3==3);

//While loops
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

//Do While loops
do {
  alert( i );
  i++;
} while (i < 3);

//For Loops
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }



//Switch Case
x = prompt("Enter GP")
switch (x) {
    case (x >= 4.5):
        alert("First Class");

    case (x <= 4.49 && x >= 3.5):
        alert("Second Class Upper");

    case (x <= 3.49 && x >= 2.5):
        alert("Second Class Lower");

    case (x <= 2.49 && x >= 1.5):
        alert("Third Class");

    default:
        alert("Pass")
}

// const smallerFunction = (a) => largerFunction(a/2);

// const largerFunction = (a) => a/4;

// console.log(smallerFunction(16));

const smallerFunction = (a) => a*2;
const largerFunction = (a, callBack) => callBack(a)/2;

console.log(16, smallerFunction);